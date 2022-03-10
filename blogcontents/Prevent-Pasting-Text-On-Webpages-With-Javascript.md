---
title: "Prevent Pasting Text On Webpages With Javascript"
author: "Ajai Chemmanam"
date: "2022-03-10"
---

Ever wondered how certain websites doesn't allow you to copy paste confidential information like credit card numbers etc. on their input field?
In this post, we discuss how we can achieve the same on any html input component.
The idea is to add an event listner to the input component that always get's executed whenever we paste something into that.

```javascript
input.addEventListener("paste", function (e) {
  e.preventDefault();
});
```

The e.preventDefault() prevents the default behaviour.
That's it. It is as simple as that.
