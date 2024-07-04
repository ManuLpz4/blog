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
        <div>
          <header>
            <span>Title</span>
            <span>Views</span>
          </header>
          <ul>
            {posts.map((post, index) => (
              <li key={index}>
                <Link href={post.url}>
                  <Button variant="ghost">
                    <span>{post.title}</span>
                    <span>{post.views.toLocaleString('en')}</span>
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>There are no recent posts.</p>
      )}
    </div>
  )
}
