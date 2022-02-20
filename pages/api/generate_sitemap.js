import fs from "fs";
import process from "process";
export const generateSitemap = async (posts) => {
  var BASE_URL = "https://www.ajaichemmanam.vercel.app";
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
      <loc>${BASE_URL}</loc>
      <priority>1.00</priority>
  </url>
  <url>
    <loc>${BASE_URL}/blogs</loc>
    <priority>0.80</priority>
  </url>
${[...posts]
  .map(
    (post) => `<url><loc>${BASE_URL}/blogposts/${post.params.id}</loc></url>`
  )
  .join("")}  <url>
    <loc>${BASE_URL}/projects</loc>
    <priority>0.64</priority>
  </url>
</urlset>`.replace(",", "");
  // writes sitemap.xml to public directory
  const path = `${process.cwd()}/public/sitemap.xml`;
  fs.writeFileSync(path, sitemap, "utf8");
  console.log(`generated sitemap`);
  return sitemap;
};
