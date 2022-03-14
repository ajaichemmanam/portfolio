---
title: "JavaScript Tips"
author: "Ajai Chemmanam"
date: "2022-03-14"
---

# Javascipt Tips

This blogpost lists some of the handy javascript tips that are useful for beginners and pros alike.
I am sure atleast one of these will be a new information to you.
Do bookmark this page, as we will add more tips to this space in the future.
You can also send more tips that you would love to be featured here.

Watch out this space !!! More javascript tips coming up ....

### Detecting Dark Mode

UI developers often require to identify whether the users are using the dark mode and do some functionality if they are running dark mode.

```javascript
const isDarkMode =
  window.matchMedia && window.matchMedia("(prefers-color-scheme:dark)").match;
```

### Check if an input element is focused

Inorder to identify if the element in concern has the focus, we can use the read only property activeElement of the Document object.

```javascript
const elem = document.querySelector(".text-input");
const isFocus = elem == document.activeElement;
```

isFocus will be true if element elem is focussed and false if elem is not focussed.

### Generating Random Strings

Lorem Ipsum is a very popular string used by all developers. What if you wanted to generate a random string?
Or you want a temporary unique id for something? You can use the following code snippet to generate a random string with pure javascript.

```javascript
const randomString = Math.random().toString(36).slice(2);
console.log(randomString);
```

### Finding domain name of email address using substring method

```javascript
let email = "abc@gmail.com";
let mailDomain = email.substring(email.indexOf("@") + 1);
console.log(mailDomain);
```

email.indexOf("@") returns the index of the symbol @. The part after than will be the mail domain.
