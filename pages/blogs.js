import Layout from "../components/layout";
import Link from "next/link";
import { PencilAltIcon } from "@heroicons/react/solid";
import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";
import React from "react";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const formatContent = (content) => {
  // Remove markdown headings from content using regex
  const regex = /^#+\s+(.*)/gm;
  content = content.replace(regex, "");

  // remove markdown images from content using regex
  const regex2 = /!\[.*\]\((.*)\)/gm;
  content = content.replace(regex2, "");

  // replace markdown links with text in content
  const regex3 = /\[(.*?)\]\((.*?)\)/g;
  content = content.replace(regex3, "$1");

  // // remove markdown code blocks from content using regex
  const regex4 = /```(.*?)```/gm;
  content = content.replace(regex4, "");

  // remove markdown italics with text in content
  const regex5 = /\*\*(.*?)\*\*/gm;
  content = content.replace(regex5, "$1");

  // remove markdown bold with text in content
  const regex6 = /\*(.*?)\*/gm;
  content = content.replace(regex6, "$1");

  return content;
};
export default function Blogs({ allPostsData }) {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [numpostperpage, setNumpostperpage] = React.useState(2);
  const [totalPages, setTotalPages] = React.useState(
    Math.floor(allPostsData.length / numpostperpage) + 1
  );

  let pageArray = new Array();
  for (var i = 1; i <= totalPages; i++) pageArray.push(i);

  const currentPosts = allPostsData.slice(
    (currentPage - 1) * numpostperpage,
    (currentPage - 1) * numpostperpage + numpostperpage
  );

  const pages = pageArray.map((idx) => (
    <a
      href="#"
      key={idx}
      onClick={() => setCurrentPage(idx)}
      className={idx == currentPage ? "text-green" : ""}
    >
      <div
        className={
          idx == currentPage ? "p-2 text-green-400" : "p-2 text-white "
        }
      >
        {idx}
      </div>
    </a>
  ));

  return (
    <Layout>
      <div className="w-52 cursor-pointer items-center rounded-full text-sm font-semibold whitespace-nowrap px-6 focus:outline-none focus:ring-2 bg-slate-700 text-slate-100 hover:bg-slate-600 hover:text-white focus:ring-slate-500">
        <Link href="/createblog">
          <div className="flex basis-1/4 flex-row-reverse p-2">
            <PencilAltIcon className="w-6 h-6 ml-2" />
            <a className="text-md mt-1">Write a new Post</a>
          </div>
        </Link>
      </div>
      <div className="h-full">
        <section className="max-w-5xl mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl">
          <h2 className="mb-4 p-4 text-3xl text-center sm:text-4xl tracking-tight text-slate-200 font-extrabold">
            All Blogs
          </h2>
          <ul className="space-y-16">
            {currentPosts.map(({ id, date, author, title, content }) => (
              <div
                className="relative flex flex-col max-w-3xl lg:ml-auto xl:max-w-none xl:w-[50rem]"
                key={id}
              >
                <div className="mb-4 text-xl text-slate-200 tracking-tight font-bold">
                  {title}
                </div>
                <div className="text-sm leading-6 text-slate-400 lg:absolute lg:top-0 lg:right-full lg:mr-8 lg:whitespace-nowrap">
                  {date}
                </div>
                <div className="text-sm leading-6 text-slate-400 lg:absolute lg:top-10 lg:right-full lg:mr-8 lg:whitespace-nowrap">
                  Written by {author}
                </div>
                <div className="mb-6 prose prose-dark text-left line-clamp-3">
                  {formatContent(content)}
                </div>
                <div className="mt-auto">
                  <Link href={`/blogposts/${id}`}>
                    <a className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-700 text-slate-100 hover:bg-slate-600 hover:text-white focus:ring-slate-500">
                      Read More
                    </a>
                  </Link>
                </div>
              </div>
            ))}
            <div className="pagination">
              <div className="flex justify-end">
                <div className="p-2 text-white">Pages:</div>
                {currentPage != 1 ? (
                  <a href="#" onClick={() => setCurrentPage(currentPage - 1)}>
                    <div className="p-2 text-white">&#8592; Prev</div>
                  </a>
                ) : (
                  <span> </span>
                )}
                {pages}
                {currentPage != totalPages ? (
                  <a href="#" onClick={() => setCurrentPage(currentPage + 1)}>
                    <div className="p-2 text-white">&#8594; Next</div>
                  </a>
                ) : (
                  <span> </span>
                )}
              </div>
            </div>
          </ul>
        </section>
      </div>
    </Layout>
  );
}
