export interface BlogPostSummary {
  path: string
  title: string
  description: string
  date: string
  category: string
  image: string
  imageAlt: string
}

function readMeta(entry: any, key: string): unknown {
  return entry?.meta && typeof entry.meta === 'object' ? entry.meta[key] : undefined
}

function isPublished(entry: any): boolean {
  return readMeta(entry, 'published') !== false
}

function toSummary(entry: any): BlogPostSummary {
  return {
    path: entry.path,
    title: entry.title || 'Unbenannter Artikel',
    description: entry.description || '',
    date: String(readMeta(entry, 'date') || ''),
    category: String(readMeta(entry, 'category') || 'Aktuelles'),
    image: String(readMeta(entry, 'image') || ''),
    imageAlt: String(readMeta(entry, 'imageAlt') || entry.title || ''),
  }
}

export async function getPublishedBlogPosts(limit?: number): Promise<BlogPostSummary[]> {
  const entries = await queryCollection('content')
    .where('path', 'LIKE', '/blog/%')
    .all()

  const posts = entries
    .filter((entry: any) => entry.path !== '/blog' && isPublished(entry))
    .map(toSummary)
    .sort((a, b) => b.date.localeCompare(a.date))

  return typeof limit === 'number' ? posts.slice(0, limit) : posts
}

export async function getPublishedBlogPost(path: string) {
  const entry = await queryCollection('content').path(path).first()

  if (!entry || !isPublished(entry)) {
    return null
  }

  return entry
}

export function formatBlogDate(date: string): string {
  if (!date) return ''

  const parsedDate = new Date(`${date}T12:00:00`)
  if (Number.isNaN(parsedDate.getTime())) return date

  return new Intl.DateTimeFormat('de-DE', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(parsedDate)
}
