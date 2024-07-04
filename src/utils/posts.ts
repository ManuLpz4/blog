import { promises as fs } from 'fs'
import path from 'path'

type Post = {
  title: string
  content?: string
}

export async function getPosts(): Promise<Post[]> {
  const postsDirectory = path.join(process.cwd(), '/src/app/(posts)')
  const entries = (
    await fs.readdir(postsDirectory, {
      withFileTypes: true,
    })
  ).filter((entry) => entry.isDirectory())
  const posts = await Promise.all(
    entries.map(async (entry) => ({
      title: entry.name,
      // content: await fs.readFile(filename, 'utf-8'),
    }))
  )

  return posts
}
