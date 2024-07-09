import { About } from '../components/about'
import { RecentPosts } from '../components/recent-posts'

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <About />
      <RecentPosts />
    </div>
  )
}
