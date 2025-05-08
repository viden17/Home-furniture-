import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CalendarIcon } from "lucide-react"

const blogPosts = [
  {
    title: "10 Tips for Building Fast Next.js Applications",
    excerpt: "Learn how to optimize your Next.js applications for maximum performance and user experience.",
    date: "June 12, 2023",
    category: "Development",
    image: "/placeholder.svg?height=400&width=600",
    slug: "10-tips-for-building-fast-nextjs-applications",
  },
  {
    title: "The Future of Web Development with React Server Components",
    excerpt: "Explore how React Server Components are changing the way we build web applications.",
    date: "May 28, 2023",
    category: "Technology",
    image: "/placeholder.svg?height=400&width=600",
    slug: "future-of-web-development-with-react-server-components",
  },
  {
    title: "Designing Accessible User Interfaces",
    excerpt: "Best practices for creating inclusive and accessible web experiences for all users.",
    date: "May 15, 2023",
    category: "Design",
    image: "/placeholder.svg?height=400&width=600",
    slug: "designing-accessible-user-interfaces",
  },
]

export default function BlogSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-violet-100 px-3 py-1 text-sm text-violet-600">Blog</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Latest Articles</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Stay updated with our latest insights, tips, and industry news.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pt-12">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="group relative flex flex-col rounded-lg border bg-white shadow-sm transition-all hover:shadow-md"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="flex flex-col space-y-2 p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <div className="rounded-full bg-violet-100 px-3 py-1 text-xs text-violet-600">{post.category}</div>
                  <div className="flex items-center">
                    <CalendarIcon className="mr-1 h-3 w-3" />
                    {post.date}
                  </div>
                </div>
                <h3 className="text-xl font-bold">{post.title}</h3>
                <p className="text-gray-500">{post.excerpt}</p>
                <div className="pt-4">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm font-medium text-violet-600 hover:text-violet-800"
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-1 h-4 w-4"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Button asChild variant="outline" className="border-violet-600 text-violet-600 hover:bg-violet-50">
            <Link href="/blog">View All Posts</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
