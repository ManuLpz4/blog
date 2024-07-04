import { promises as fs } from 'fs'
import path from 'path'

type Post = {
  url: string
  title: string
  views: number
}

export async function getPosts(): Promise<Post[]> {
  const postsDirectory = path.join(process.cwd(), 'src', 'app', '(posts)')
  const entries = (
    await fs.readdir(postsDirectory, {
      withFileTypes: true,
    })
  ).filter((entry) => entry.isDirectory())
  const posts = await Promise.all(
    entries.map(async (entry) => {
      const postFile = path.join(postsDirectory, entry.name, 'page.mdx')
      const content = await fs.readFile(postFile, 'utf-8')

      return {
        url: entry.name,
        title: content.match(/^#\s*(.*)/m)?.[1] ?? entry.name,
        views: Math.floor(Math.random() * 10000),
      }
    })
  )

  return posts
}
