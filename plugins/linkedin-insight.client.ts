// plugins/linkedin-insight.client.ts
import { defineNuxtPlugin } from '#app'
console.log('[LinkedIn Insight] plugin initialized')

export default defineNuxtPlugin(() => {
  if (process.client) {
    // 1) Initialize the partner ID array
    ;(window as any)._linkedin_partner_id = '7175042'
    ;(window as any)._linkedin_data_partner_ids =
      (window as any)._linkedin_data_partner_ids || []
    ;(window as any)._linkedin_data_partner_ids.push(
      (window as any)._linkedin_partner_id
    )

    // 2) Inject the insight.min.js script
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.async = true
    script.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js'
    document.head.appendChild(script)
  }
})
