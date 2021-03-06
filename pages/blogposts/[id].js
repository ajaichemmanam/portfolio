import Link from "next/link";
import Layout from "../../components/layout";
import MarkDownFormatter from "../../components/markdown";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function BlogPost({ postData }) {
  // console.log("BlogPost", postData);
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <meta
          name="description"
          content={`Learn more about ${postData.title}`}
        />
        <meta property="og:title" content={`${postData.title}`} />
        <meta
          property="og:description"
          content={`Learn more about ${postData.title}`}
        />
        <meta
          property="og:url"
          content={`https://ajaichemmanam.vercel.app/blogposts/${postData.id}`}
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto mt-10 px-4 pb-28 sm:mt-16 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl">
        <article className="relative pt-10 max-w-3xl mx-auto xl:max-w-none xl:grid xl:grid-cols-[1fr_50rem] xl:gap-x-8">
          <div className="hidden mb-5 pb-5 border-b border-slate-200/5 xl:block">
            <Link href="/blogs">
              <a className="group flex font-semibold text-slate-200 hover:text-white">
                &larr; Back to Blog List
              </a>
            </Link>
          </div>
          <div className="col-span-full text-3xl sm:text-4xl sm:text-center xl:mb-16 font-extrabold tracking-tight text-slate-200">
            {postData.title}
          </div>
          <div className="absolute top-0 inset-x-0 text-slate-400 sm:text-center">
            Date: {postData.date}
          </div>
          <div className="text-sm leading-6 mb-16 mx-auto xl:mb-0">
            <img
              src={
                postData.authorimg
                  ? postData.authorimg
                  : "/static/testimonialImages/ajai.jpeg"
              }
              class="rounded-full w-32 mb-4 mx-auto xl:block hidden "
              alt="Author"
            />
            Written by {postData.author}
          </div>
          <div className="prose prose-dark">
            <MarkDownFormatter markdown={postData.content} />
          </div>
        </article>
      </div>
    </Layout>
  );
}
