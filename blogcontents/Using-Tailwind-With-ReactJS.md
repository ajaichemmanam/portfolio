---
title: "Using Tailwind With ReactJS"
author: "Ajai Chemmanam"
date: "2022-03-14"
---

Tailwind CSS and ReactJS framework are two most powerful tools for developing awesome frontend webapps available today.
This blog guides you to setup Tailwind with ReactJS in just seconds.
Once you have followed the contents, you can check the official Tailwind webpage (https://tailwindcss.com/) and React (https://create-react-app.dev/docs/getting-started) for more information.

### Step1: Create a new React app

First we will setup a new react app with create-react-app.

```bash
npx create-react-app my-project
cd my-project
```

### Step2: Install Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
```

This command installs tailwindcss and its peer dependencies via npm, and then run the init command to generate both tailwind.config.js and postcss.config.js.

### Step3: Intialise Tailwind

```bash
npx tailwindcss init
```

### Step4: Configure template paths

Add the paths to all template files inside tailwind.config.js file.
To do so, Open `tailwind.config.js` and add `"./src/\*_/_.{js,jsx,ts,tsx}"`inside content array.
Final file should look like

```javascript
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### Step5: Add the Tailwind directives to CSS file

Add the following code on top of the `./src/index.css` file

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Step6: Run the react app

Once it's ready, you can run the react app with tailwind configured.

```bash
npm run start
```

### Final Step: Start Using Tailwind CSS

You can add styling to your content by adding Tailwind classes in className.
An example is shown below.

```javascript
export default function App() {
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}
```
