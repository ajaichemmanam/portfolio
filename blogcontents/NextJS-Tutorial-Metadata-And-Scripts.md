---
title: "NextJS Tutorial - Metadata and Loading Scripts"
author: "Ajai Chemmanam"
date: "2022-03-24"
---

# Adding Metadata in NextJS

You can change the metadata of the webpage using the `<Head>` tag.

We know that an html page will have a `<head>` section and a `<body>` section.
The sites metadata are usually stored in the `<head>` section.

`<Head>` is a React Component that is built into Next.js. It allows you to modify the `<head>` of a page.

You can import the `<Head>` tag using the following.
`import Head from 'next/head'`

### Changing the title of the webpage

```js
export default function FirstPost() {
  return (
    <Head>
      <title>First Post</title>
    </Head>
  );
}
```

### Adding Third-Party JavaScript using <Head>

```js
export default function FirstPost() {
  return (
    <Head>
      <script src="https://connect.facebook.net/en_US/sdk.js" />
    </Head>
  );
}
```

Drawback: We cannot guarentee when it would load with respect to the other JavaScript code fetched on the same page.
If the script is not loaded before the page uses it, it can lead to a crash.
If a particular script is render-blocking and can delay page content from loading, this can signficiantly impact performance.

### Adding Third-Party JavaScript using <Script>

Import `<Script>` as given below
`import Script from 'next/script'`

Usage

```js
<Script
  src="https://connect.facebook.net/en_US/sdk.js"
  strategy="lazyOnload"
  onLoad={() =>
    console.log(`script loaded correctly, window.FB has been populated`)
  }
/>
```

`strategy` attribute controls when the third-party script should load. _lazyOnload_ tells Next.js to load this particular script lazily during browser idle time.

`onLoad` is used to run any JavaScript code immediately after the script has finished loading.

Note: `<Script>` is to be used outside `<Head>` tag
