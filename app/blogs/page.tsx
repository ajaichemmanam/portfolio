import Link from "next/link";
import { PencilAltIcon } from "@heroicons/react/solid";
import getPostMetadata from "../../lib/blogUtils";
import BlogCollections from "../../components/BlogCollections";

export default function BlogsPage() {
  const currentPosts = getPostMetadata();

  return (
    <div className="App">
      <BlogCollections posts={currentPosts} />
    </div>
  );
}
