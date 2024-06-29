export const seo = {
  title: 'Wdon | 开发者、认知科学初学者',
  description: '我叫 Wdon，一名开发者，认知科学初学者。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://next.wdonkits.tech'
      : 'http://localhost:3000'
  ),
} as const
