---
title: "PreRendering on NextJS"
author: "Ajai Chemmanam"
date: "2020-01-02"
---

Next.js pre-renders every page by default.
Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript.
Pre-rendering can result in better performance and SEO.

Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering. The difference is in when it generates the HTML for a page.

Static Generation is the pre-rendering method that generates the HTML at build time.
The pre-rendered HTML is then reused on each request.

Server-side Rendering is the pre-rendering method that generates the HTML on each request.

In development mode, every page is pre-rendered on each request — even for pages that use Static Generation.

We can choose which pre-rendering form to use for each page in the project.
A "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others is also possible.

### How to check if PreRendering works?

Disable Javascript in your browser and try to load the page.
The app should still render without JavaScript

In case of plain React.js app (without Next.js), there’s no pre-rendering, so the app doesn't work if JavaScript is disabled.

### When to Use Static Generation v.s. Server-side Rendering?

Static Generation (with and without data) is the best way to choose whenever possible because the page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

Static generation is useful for pages like:

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

But in some cases, we cannot pre-render a page ahead of a user's request.
For example, if the page shows frequently updated data, and the page content changes on every request.
In that case, we should use Server-side Rendering.
It will be slower, but the pre-rendered page will always be up-to-date.

Another way is to completely skip pre-rendering and use client-side JavaScript to populate frequently updated data.

### Static Generation with external data

Pages that do not require fetching external data, will automatically be statically generated when the app is built for production.
But in some pages, the content is taken by accessing the file system, fetching from external API, or querying a database at build time.

In Next.js, when exporting a page component, we can also export an async function called `getStaticProps`.
`getStaticProps` runs at build time in production.
Inside the function, we can fetch external data and send it as props to the page.

##### Usage:

```js
export default function Home(props) { ... }

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = ...

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: ...
  }
}

```
