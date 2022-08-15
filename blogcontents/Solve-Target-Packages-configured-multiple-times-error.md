---
title: "Solve Target Packages configured multiple times error"
author: "Ajai Chemmanam"
date: "2022-08-15"
---

Fix: Target Packages (Packages) is configured multiple times in /etc/apt/sources.list error in ubuntu.

## Problem

Sometimes, when you do sudo apt update, you might see an error like this

W: Target Packages (Packages) is configured multiple times in /etc/apt/sources.list:60 and /etc/apt/sources.list.d/cuda-ubuntu2004-x86_64.list

## Solution

Edit the /etc/apt/sources.list file and remove the duplicated lines
