---
title: "Solve ENOSPC: System limit for number of file watchers reached Error"
author: "Ajai Chemmanam"
date: "2022-05-26"
---

## Problem

When I was working with a reactjs project on Ubuntu system, I received an error like this:

```
Error: ENOSPC: System limit for number of file watchers reached
```

## Solution

The reason for this error is the kernel limit with the inotify watchers.

Temporary Solution

```bash
sudo sysctl -w fs.inotify.max_user_watches=524288
```

This works until you reboot your system.

Inorder to persist the fix, Run the following.

```bash
echo "fs.inotify.max_user_watches=524288" \
  | sudo tee -a /etc/sysctl.conf
```
