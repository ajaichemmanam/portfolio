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
  const { slug } = props.params;
  const post = getPostContent(slug);
  return (
    <div className="App">
      <BlogPost post={post} />
    </div>
  );
}
