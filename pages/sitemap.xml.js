// import fs from "fs";
import { getAllPostIds, getPostData } from "../lib/posts";

const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
  const baseUrl = {
    development: "http://localhost:3000",
    production: "https://ajaichemmanam.vercel.app",
  }[process.env.NODE_ENV];

  const staticPages = ["projects", "research", "blogs", "portfolio"];

  const posts = await getAllPostIds();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
    <loc>${baseUrl}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>always</changefreq>
    <priority>1.0</priority>
  </url>
      ${staticPages
        .map((staticPage) => {
          return `
            <url>
              <loc>${baseUrl}/${staticPage}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>daily</changefreq>
              <priority>0.9</priority>
            </url>
          `;
        })
        .join("")}
      ${posts
        .map((post) => {
          const postData = getPostData(post.params.id);
          return `
              <url>
                <loc>${baseUrl}/blogs/${post.params.id}</loc>
                <lastmod>${new Date(postData.date).toISOString()}</lastmod>
                <changefreq>weekly</changefreq>
                <priority>0.7</priority>
              </url>
            `;
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
