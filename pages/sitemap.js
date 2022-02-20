import { getAllPostIds } from "../lib/posts";
import { generateSitemap } from "./api/generate_sitemap";

export async function getStaticProps({ params }) {
  const posts = await getAllPostIds();
  var sitemap = await generateSitemap(posts);
  console.log("sitemap", sitemap);
  return {
    props: { sitemap: sitemap.toString() },
  };
}

export default function Sitemap({ sitemap }) {
  return <div>{sitemap}</div>;
}
