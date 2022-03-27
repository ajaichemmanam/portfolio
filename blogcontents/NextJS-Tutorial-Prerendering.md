---
title: "NextJS Tutorial - PreRendering on NextJS"
author: "Ajai Chemmanam"
date: "2022-03-25"
---

Next.js pre-renders every page by default.
Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript.
Pre-rendering can result in better performance and SEO.

Next.js has two forms of pre-rendering:

- Static Generation
- Server-side Rendering.

The difference between the two is when it generates the HTML for a page.

Static Generation is a pre-rendering method that generates the HTML at build time.
The pre-rendered HTML is then reused on each request.

Server-side Rendering is a pre-rendering method that generates the HTML on each request at the server side.
So most of the heavy lifting is done at the server end and not in the client browser.

We can choose which pre-rendering to use for each page in the project.
A "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others is also possible.

Note: In development mode, every page is pre-rendered on each request — even for pages that uses Static Generation.

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

In Next.js, when exporting a page component, we can also export an async function called **getStaticProps**.
**getStaticProps** runs at build time in production.
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

**getStaticProps** can only be exported from a page.
We can’t export it from non-page files as React needs to have all the required data before the page is rendered.

### Server Side Rendering (SSR) with external data

To use Server-side Rendering, we need to export **getServerSideProps** instead of **getStaticProps** from the page.

##### Usage:

```js
export async function getServerSideProps(context) {
  return {
    props: {
      // props for your component
    },
  };
}
```

Parameter (context) contains request specific parameters.
Use **getServerSideProps** only if we need to pre-render a page whose data must be fetched at request time.
Time to first byte (TTFB) will be slower than **getStaticProps** because the server must compute the result on every request, and the result cannot be cached by a CDN without extra configuration.

### Hybrid Static and Client Side Rendering

We can also statically generate/pre-render parts of the page that do not require external data.
When the page loads, fetch external data from the client using JavaScript and populate the remaining parts.

This approach works well for pages like admin dashboards.
Since a dashboard is a private, user-specific page, SEO is not relevant, and the page doesn’t need to be pre-rendered.
The data is frequently updated, which requires request-time data fetching.

### SWR

SWR is a React Hook useful when fetching data on the client side.
It handles caching, revalidation, focus tracking, refetching on interval, and more.

##### Usage:

```js
import useSWR from "swr";

function Profile() {
  const { data, error } = useSWR("/api/user", fetch);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <div>hello {data.name}!</div>;
}
```

Read more about SWR in the [official documentation](https://swr.vercel.app/)
