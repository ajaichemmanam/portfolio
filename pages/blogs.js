import Layout from "../components/layout";
import Link from "next/link";
import { PencilAltIcon } from "@heroicons/react/solid";
import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Blogs({ allPostsData }) {
  return (
    <Layout>
      <div className="w-52 cursor-pointer items-center rounded-full text-sm font-semibold whitespace-nowrap px-6 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500">
        <Link href="/createblog">
          <div className="flex basis-1/4 flex-row-reverse p-2">
            <PencilAltIcon className="w-6 h-6 ml-2" />
            <a className="text-md mt-1">Write a new Post</a>
          </div>
        </Link>
      </div>
      <div className="h-screen">
        <section className="max-w-5xl mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl">
          <h2 className="mb-4 p-4 text-3xl text-center sm:text-4xl tracking-tight text-slate-900 font-extrabold dark:text-slate-200">
            All Blogs
          </h2>
          <ul className="space-y-16">
            {allPostsData.map(({ id, date, author, title, content }) => (
              <div
                className="relative flex flex-col max-w-3xl lg:ml-auto xl:max-w-none xl:w-[50rem]"
                key={id}
              >
                <div className="mb-4 text-xl text-slate-900 tracking-tight font-bold dark:text-slate-200">
                  {title}
                </div>
                <div className="text-sm leading-6 dark:text-slate-400 lg:absolute lg:top-0 lg:right-full lg:mr-8 lg:whitespace-nowrap">
                  {date}
                </div>
                <div className="text-sm leading-6 dark:text-slate-400 lg:absolute lg:top-10 lg:right-full lg:mr-8 lg:whitespace-nowrap">
                  Written by {author}
                </div>
                <div className="mb-6 prose prose-slate dark:prose-dark text-left line-clamp-3">
                  {content}
                </div>
                <div className="mt-auto">
                  <div className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500">
                    <Link href={`/blogposts/${id}`}>
                      <a className="">Read More</a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  );
}
