import Link from "next/link";
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
export default function BlogCollections({ posts }) {
  return (
    <section className="min-h-[30rem] px-4 max-w-5xl mx-auto sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl">
      <h2 className="mb-4 p-4 text-3xl text-center sm:text-4xl tracking-tight text-slate-200 font-extrabold">
        All Blogs
      </h2>
      <ul className="space-y-16">
        {posts.map(({ slug, date, author, title, subtitle }) => (
          <div
            className="relative flex flex-col max-w-3xl lg:ml-auto xl:max-w-none xl:w-[50rem]"
            key={slug}
          >
            <Link
              href={`/blogs/${slug}`}
              className="mb-4 text-xl text-slate-200 tracking-tight font-bold cursor-pointer"
            >
              {title}
            </Link>
            <div className="text-sm leading-6 text-slate-400 lg:absolute lg:top-0 lg:right-full lg:mr-8 lg:whitespace-nowrap">
              {date}
            </div>
            <div className="text-sm leading-6 text-slate-400 lg:absolute lg:top-10 lg:right-full lg:mr-8 lg:whitespace-nowrap">
              Written by {author}
            </div>
            <div className="mb-6 prose prose-dark text-left line-clamp-3">
              {formatContent(subtitle)}
            </div>
            <div className="mt-auto">
              <Link
                href={`/blogs/${slug}`}
                className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-700 text-slate-100 hover:bg-slate-600 hover:text-white focus:ring-slate-500"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </ul>
    </section>
  );
}
