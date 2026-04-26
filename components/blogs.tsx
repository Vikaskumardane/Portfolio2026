import { ExternalLink, BookOpen } from "lucide-react";
import Image from "next/image";

interface MediumPost {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  categories: string[];
}

// Fetch RSS to JSON (Next.js server-side, caches and revalidates)
async function getMediumBlogs() {
  try {
    const res = await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@Vikaskumar_Dane",
      { next: { revalidate: 3600 } } // Revalidate every hour
    );
    if (!res.ok) return [];
    const data = await res.json();
    return (data.items as MediumPost[]) || [];
  } catch (error) {
    console.error("Failed to fetch Medium blogs:", error);
    return [];
  }
}

export async function Blogs() {
  const blogs = await getMediumBlogs();

  if (!blogs || blogs.length === 0) return null;

  // Duplicate the array to create a seamless infinite scrolling marquee effect
  const marqueeBlogs = [...blogs, ...blogs];

  return (
    <section id="blogs" className="py-24 bg-white dark:bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full px-4 py-1.5 mb-6">
            <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">Technical Writing</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">Articles</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full" />
          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            I regularly write about Cloud, DevOps, and Serverless architectures. 
            Here are my latest publications on Medium.
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-x-hidden group">
        {/* The scrolling track */}
        <div className="animate-marquee flex whitespace-nowrap gap-8 px-4 hover:[animation-play-state:paused] w-max">
          {marqueeBlogs.map((blog, idx) => {
            // Extract a clean snippet from HTML description
            const cleanSnippet = blog.description.replace(/<[^>]+>/g, '').slice(0, 150) + '...';
            // Medium thumbnails can sometimes be empty or malformed in RSS, fallback to parsing content or a generic placeholder
            let thumbnail = blog.thumbnail;
            if (!thumbnail) {
              const imgRegex = /<img[^>]+src="([^">]+)"/i;
              const match = blog.content.match(imgRegex);
              thumbnail = match ? match[1] : "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop";
            }

            return (
              <a
                key={`${blog.guid}-${idx}`}
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[350px] sm:w-[450px] flex-shrink-0 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col transition-all duration-300 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10 group/card"
              >
                <div className="relative w-full h-48 rounded-xl overflow-hidden mb-6 bg-zinc-200 dark:bg-zinc-800">
                  <Image
                    src={thumbnail}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover/card:scale-110"
                    sizes="(max-width: 768px) 350px, 450px"
                  />
                  <div className="absolute inset-0 bg-black/10 dark:bg-black/40 group-hover/card:bg-transparent transition-colors duration-300" />
                </div>
                
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  {blog.categories.slice(0, 3).map((cat) => (
                    <span key={cat} className="text-xs font-semibold px-3 py-1 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 capitalize">
                      {cat}
                    </span>
                  ))}
                  <span className="text-xs text-zinc-500 ml-auto whitespace-nowrap">
                    {new Date(blog.pubDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 line-clamp-2 leading-tight group-hover/card:text-emerald-500 transition-colors whitespace-normal">
                  {blog.title}
                </h3>
                
                <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3 mb-6 whitespace-normal flex-grow">
                  {cleanSnippet}
                </p>

                <div className="mt-auto flex items-center text-emerald-600 dark:text-emerald-400 font-medium text-sm">
                  Read Article on Medium
                  <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover/card:translate-x-1 group-hover/card:-translate-y-1" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
