---
title: "Solve Bazel following signatures were invalid"
author: "Ajai Chemmanam"
date: "2022-08-14"
---

Fix: GPG error - The following signatures couldn't be verified because the public key is not available: NO_PUBKEY

## Problem

Sometimes, when you do sudo apt update, you might see an error like this

 The following signatures were invalid: EXPKEYSIG 3D5919B448457EE0 Bazel Developer (Bazel APT repository key) <bazel-dev@googlegroups.com>

## Solution

Open a terminal and do the following:

```bash
curl https://bazel.build/bazel-release.pub.gpg | sudo apt-key add -
```

You should see something like this.

```
% Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  4714  100  4714    0     0  35712      0 --:--:-- --:--:-- --:--:-- 35712
OK
```

## Explanation

The error was thrown because Bazel Ubuntu PPA key has expired. We had to manually update your apt keyring with the new key.
