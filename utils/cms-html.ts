import { parseFragment } from 'parse5'

// CMS content is editorial data, not executable Vue/HTML templates.
// The same parser is used during SSG and in the browser, so hydration is deterministic.
type CmsNode = {
  nodeName: string
  tagName?: string
  namespaceURI?: string
  value?: string
  attrs?: { name: string; value: string; namespace?: string }[]
  childNodes?: CmsNode[]
}

const inlineTags = new Set(['strong', 'b', 'em', 'i', 'u', 's', 'del', 'br', 'a', 'code', 'span', 'sub', 'sup'])
const blockTags = new Set(['p', 'ul', 'ol', 'li', 'blockquote', 'h2', 'h3', 'h4', 'h5', 'h6', 'address', 'div', 'hr'])
const discardTags = new Set(['script', 'style', 'iframe', 'object', 'embed', 'template', 'svg', 'math', 'form', 'input', 'button', 'textarea', 'select', 'img', 'video', 'audio', 'link', 'meta'])
// Retain the existing editorial emphasis and legal-page styling, not arbitrary CSS.
const allowedClasses = new Set([
  'font-semibold', 'text-primary', 'text-secondary', 'underline', 'hover:no-underline',
  'underline-offset-4', 'hover:text-primary/80', 'mt-3', 'mt-4', 'mt-6', 'text-lg',
  'leading-relaxed', 'not-italic', 'list-disc', 'list-decimal', 'space-y-2', 'pl-6'
])

function escapeHtml(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;')
}

function safeHref(value: string): boolean {
  const url = value.trim()
  // Restrict to normal internal anchors/paths and explicit web, mail and phone protocols.
  // Do not allow protocol-relative URLs, backslashes, control characters or javascript/data URLs.
  if (!url || /[\\\u0000-\u0020\u007f]/.test(url)) return false
  if (url.startsWith('#') || (url.startsWith('/') && !url.startsWith('//'))) return true
  return /^(https?:\/\/|mailto:|tel:)/i.test(url)
}

function renderChildren(nodes: CmsNode[] = [], inline: boolean): string {
  return nodes.map(node => renderNode(node, inline)).join('')
}

function renderNode(node: CmsNode, inline: boolean): string {
  if (node.nodeName === '#text') return escapeHtml(node.value || '')
  const tag = node.tagName
  if (!tag || (node.namespaceURI && node.namespaceURI !== 'http://www.w3.org/1999/xhtml') || discardTags.has(tag)) return ''
  if (inline && (tag === 'ul' || tag === 'ol')) {
    const items = (node.childNodes || []).filter(child => child.tagName === 'li')
    return items.map((item, index) => {
      const marker = tag === 'ol' ? `${index + 1}. ` : '• '
      return marker + renderChildren(item.childNodes, true)
    }).join('<br>')
  }
  const children = renderChildren(node.childNodes, inline)
  if (inline && blockTags.has(tag)) {
    // Pages CMS wraps rich-text fields in <p>. Never create nested paragraphs.
    return children
  }
  if (!inlineTags.has(tag) && !blockTags.has(tag)) return children
  if (tag === 'br' || tag === 'hr') return `<${tag}>`
  const attrs = node.attrs || []
  const classes = (attrs.find(attr => attr.name === 'class')?.value || '')
    .split(/\s+/).filter(token => allowedClasses.has(token)).join(' ')
  let attributes = classes ? ` class="${escapeHtml(classes)}"` : ''
  if (tag === 'a') {
    const href = attrs.find(attr => attr.name === 'href' && !attr.namespace)?.value || ''
    if (!safeHref(href)) return children
    attributes += ` href="${escapeHtml(href.trim())}"`
    if (attrs.find(attr => attr.name === 'target')?.value === '_blank') {
      attributes += ' target="_blank" rel="noopener noreferrer"'
    }
  }
  return `<${tag}${attributes}>${children}</${tag}>`
}

/** Formatted inline content, for example a single existing paragraph or list item. */
export function cmsInline(value?: string | null): string {
  const nodes = parseFragment(value || '').childNodes as CmsNode[]
  // Multi-paragraph edits still stay valid inside the existing paragraph element.
  const parts: string[] = []
  let pendingBreak = false
  for (const node of nodes) {
    if (node.nodeName === '#text' && !node.value?.trim() && pendingBreak) continue
    const rendered = renderNode(node, true)
    if (!rendered) continue
    const isBlock = Boolean(node.tagName && blockTags.has(node.tagName))
    if (parts.length && (pendingBreak || isBlock)) parts.push('<br><br>')
    parts.push(rendered)
    pendingBreak = isBlock
  }
  return parts.join('')
}

/** Rich content with actual paragraphs, lists and headings, for FAQ/legal sections. */
export function cmsBlock(value?: string | null): string {
  return renderChildren(parseFragment(value || '').childNodes as CmsNode[], false)
}
