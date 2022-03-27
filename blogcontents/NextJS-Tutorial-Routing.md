---
title: "NextJS Tutorial - Routing"
author: "Ajai Chemmanam"
date: "2022-03-23"
---

# File System Based Routing

Each Page of a NextJS Webpage resides in the `/pages` directory

![nextjs_pages.png](/static/blogImages/nextjs_pages.png)

In NextJS, Pages are associated with a route based on their file name.

Eg.
`pages/index.js` corresponds to `/` route.
`pages/first-page.js` is associated with the `/first-page` route.
`pages/posts/first-post.js` is associated with the `/posts/first-post` route.

### Creating a New Page

Create a new file with the route as filename. Eg. `pages/posts/first-post.js`

Minimum content to be added to the file is given below.

```js
export default function FirstPost() {
  return <h1>First Post</h1>;
}
```

You can give any name to the function, but make sure you export it as a default export.

### Navigating Between Pages

Like in HTML syntax, If you need to link to an external page outside the Next.js app, just use an <a href="…"> tag.
But for navigation within the NextJS app, use <Link> tag.

The Link component enables _client-side navigation_ between two pages in the same Next.js app.
The browser does not load the full page during client-side navigation, it uses javascript to change the contents from the client side itself. This is faster than default navigation done by the browser.

Import Link inside the page code.

`import Link from 'next/link'`

Add the following to theindex page to create a link to navigate to the page we just created.

```js
<Link href="/posts/first-post">
  <a>Back to home</a>
</Link>
```

Similarly add the following to the `pages/posts/first-post.js` to navigate back to the root page.

```js
<Link href="/">
  <a>Back to home</a>
</Link>
```

Note: If you need to add attributes like, for example, className, add it to the <a> tag, not to the <Link> tag.

### Bonus: Code splitting and prefetching

Next.js does code splitting automatically, so each page only loads what’s absolutely necessary for that page.

Eg: When the homepage is rendered, the code for other pages is not served initially. This ensures that the homepage loads quickly even if you have hundreds of pages.

Another advantage is page isolation. If a certain page throws an error, the rest of the application would still work.

Further, Prefetching is enabled in a production build of Next.js.
i.e., whenever Link components appear in the browser’s viewport, Next.js automatically prefetches the code for the linked page in the background. By the time you click the link, the code for the destination page will already be loaded in the background, and the page transition will be near-instant!.

# Dynamic Page Routing

Dynamic Routing means using dynamic URLs for pages based on external data.

Pages that begin with [ and end with ] are dynamic routes in Next.js.
Example: `pages/posts/[id].js`

The content of the page is similar to any other pages.
Example

```js
import Layout from "../../components/layout";

export default function Post() {
  return <Layout>...</Layout>;
}
```

Additionally, we use `getStaticPaths` to return a list of possible values for `id`.

```js
export async function getStaticPaths() {
  // Return a list of possible value for id
}
```

Finally, we need to implement getStaticProps to fetch necessary data with a given id.

```js
export async function getStaticProps({ params }) {
  // Fetch necessary data based on params.id (because the file name is [id].js)
}
```
