import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "../types/blogtypes";

const getPostMetadata = (): PostMetadata[] => {
    const folder = "blogcontents/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));

    // Get gray-matter data from each file.
    return markdownPosts.map((fileName) => {
        const fileContents = fs.readFileSync(`blogcontents/${fileName}`, "utf8");
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            subtitle: matterResult.data.subtitle || matterResult.content.slice(0, 500),
            author: matterResult.data.author,
            slug: fileName.replace(".md", ""),
        };
    }).sort((a, b) => {
        if (a.date > b.date) {
            return -1;
        } else if (a.date < b.date) {
            return 1;
        } else {
            return 0;
        }
    }
    );
};

export default getPostMetadata;