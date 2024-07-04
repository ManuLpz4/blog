import Link from 'next/link'

import { getPosts } from '../utils/posts'
import { Button } from './ui/button'

export async function RecentPosts() {
  const posts = await getPosts()

  return (
    <>
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Recent posts
      </h2>

      {posts.length ? (
        <div className="grid grid-cols-2 gap-4">
          <div>Title</div>
          <div>Views</div>
          {posts.map((post, index) => (
            <>
              <Link key={index} href={post.url}>
                <Button variant="ghost">{post.title}</Button>
              </Link>
              <div>{post.views.toLocaleString('en')}</div>
            </>
          ))}
        </div>
      ) : (
        <p>There are no recent posts.</p>
      )}
    </>
  )
}
