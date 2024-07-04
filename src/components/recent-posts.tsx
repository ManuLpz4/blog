import Link from 'next/link'

import { getPosts } from '../utils/posts'
import { Button } from './ui/button'

export default async function RecentPosts() {
  const posts = await getPosts()

  return (
    <>
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Recent posts
      </h2>
      {posts.length ? (
        posts.map((post, index) => (
          <Link key={index} href={post.title}>
            <Button variant="ghost" title="aegia">
              {post.title}
            </Button>
          </Link>
        ))
      ) : (
        <p>There are no recent posts.</p>
      )}
    </>
  )
}
