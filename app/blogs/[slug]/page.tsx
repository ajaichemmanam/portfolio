import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import MarkDownFormatter from "../../../components/markdown";
import BlogPost from "../../../components/BlogPost";
import fs from "fs";
import matter from "gray-matter";
import getPostMetadata from "../../../lib/blogUtils";

const getPostContent = (slug: string) => {
  const folder = "blogcontents/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  return matter(content);
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export default function BlogPage(props: any) {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <>
      {/* <Head>
        <title>{post.data.title}</title>
        <meta
          name="description"
          content={`Learn more about ${post.data.title}`}
        />
        <meta property="og:title" content={`${post.data.title}`} />
        <meta
          property="og:description"
          content={`Learn more about ${post.data.title}`}
        />
        <meta
          property="og:url"
          content={`https://ajaichemmanam.vercel.app/blogposts/${post.data.slug}`}
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <BlogPost post={post} />

      {/* <div className="mx-auto py-8 ssm:px-6 md:px-8 xl:px-12 xl:max-w-6xl">
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
            <Image
              src={post.data.authorimg || "/static/testimonialImages/ajai.jpeg"}
              className="rounded-full w-32 mb-4 mx-auto xl:block hidden "
              alt="Author"
              width={100}
              height={100}
            />
            Written by {post.data.author}
          </div>
          <div className="prose prose-dark">
            <MarkDownFormatter markdown={post.content} />
          </div>
        </article>
      </div> */}
    </>
  );
}
