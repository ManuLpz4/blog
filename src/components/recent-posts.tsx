import Link from 'next/link'

import { getPosts } from '../utils/posts'
import { Button } from './ui/button'

export async function RecentPosts() {
  const posts = await getPosts()

  return (
    <div>
      <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Recent posts
      </h2>
      {posts.length ? (
        <div className="-mx-4 grid grid-cols-2">
          <header className="col-span-2 mb-2 flex justify-between px-4 text-gray-500">
            <span>Title</span>
            <span className="text-right">Views</span>
          </header>
          {posts.map((post, index) => (
            <Link href={post.url} key={index} className="col-span-2">
              <Button
                variant="ghost"
                className="flex w-full justify-between gap-4"
              >
                <span className="text-wrap text-start">{post.title}</span>
                <span className="text-right">
                  {post.views.toLocaleString('en')}
                </span>
              </Button>
            </Link>
          ))}
        </div>
      ) : (
        <p>There are no recent posts.</p>
      )}
    </div>
  )
}
