export default function PostsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="max-w-[500px] m-auto">{children}</div>
}
