---
title: "NextJS Tutorial -  Asset Managment"
author: "Ajai Chemmanam"
date: "2022-03-21"
---

## Static Asset Managment in NextJS

Static Assets like images, robots.txt (a Google Site Verification file) can be served from public folder in the root NextJS directory. Files inside public can be referenced from the root of the application.

![nextjs_public.png](/static/blogImages/nextjs_public.png)

### Adding an Image as an asset

Create an `images` directory inside the `public` folder in the NextJS root directory.

Add the image file in this directory.

The file can be accessed in normal HTML usage as `<img src="/images/profile.jpg" alt="Your Name" />`.
But we need to ensure that

- Image is responsive on different screen sizes
- Image is optimized with a third-party tool or library to reduce filesize for faster loading
- Supports Lazy Loading: Only load the image when they enter the viewport

Instead use `<Image>` component in NextJS

Import `<Image>` component as below.
`import Image from 'next/image'`

```js
<Image
  src="/images/profile.jpg" // Route of the image file
  height={144} // Desired size with correct aspect ratio
  width={144} // Desired size with correct aspect ratio
  alt="Your Name"
/>
```

Next.js supports Image Optimization by default. This allows for resizing, optimizing, and serving images in modern formats like WebP when the browser supports it. This avoids shipping large images to devices with a smaller viewport. It also allows Next.js to automatically adopt future image formats and serve them to browsers that support those formats.

Automatic Image Optimization works with any image source. Even if the image is hosted by an external data source, like a CMS, it can still be optimized.

Instead of optimizing images at build time, Next.js optimizes images on-demand, as users request them. Unlike static site generators and static-only solutions, the build times will be same irrespective of number of images.

Images are lazy loaded by default. Images load as needed, when they are scrolled into viewport.

Images are always rendered in such a way as to avoid [Cumulative Layout Shift](https://web.dev/cls/), a [Core Web Vital](https://web.dev/vitals/#core-web-vitals) that Google is going to use in [search ranking](https://webmasters.googleblog.com/2020/05/evaluating-page-experience.html).

Read More about [Automatic Image Optimisation in the NextJS Documentation](https://nextjs.org/docs/basic-features/image-optimization).
