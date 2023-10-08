import Link from "next/link";
import MarkDownFormatter from "./markdown";
export default function BlogPost({ post }) {
  return (
    <div className="mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl">
      <article className="relative pt-10 max-w-3xl mx-auto xl:max-w-none xl:grid xl:grid-cols-[1fr_50rem] xl:gap-x-8">
        <div className="hidden mb-5 pb-5 border-b border-slate-200/5 xl:block">
          <Link
            href="/blogs"
            className="group flex font-semibold text-slate-200 hover:text-white"
          >
            &larr; Back to Blog List
          </Link>
        </div>
        <div className="col-span-full text-3xl sm:text-4xl sm:text-center xl:mb-16 font-extrabold tracking-tight text-slate-200">
          {post.data.title}
        </div>
        <div className="absolute top-0 inset-x-0 text-slate-400 sm:text-center">
          Date: {post.data.date}
        </div>
        <div className="text-sm leading-6 mb-16 mx-auto xl:mb-0">
          <img
            src={post.data.authorimg || "/static/testimonialImages/ajai.jpeg"}
            class="rounded-full w-32 mb-4 mx-auto xl:block hidden "
            alt="Author"
          />
          Written by {post.data.author}
        </div>
        <div className="prose prose-dark">
          <MarkDownFormatter markdown={post.content} />
        </div>
      </article>
    </div>
  );
}
