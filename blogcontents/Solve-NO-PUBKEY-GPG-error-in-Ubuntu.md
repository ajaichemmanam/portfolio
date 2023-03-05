---
title: "Solve NO_PUBKEY GPG error in Ubuntu"
author: "Ajai Chemmanam"
date: "2022-08-12"
---

Fix: GPG error - The following signatures couldn't be verified because the public key is not available: NO_PUBKEY

## Problem

Sometimes, when you do sudo apt update, you might see an error like this

An error occurred during the signature verification. The repository is not updated and the previous index files will be used. GPG error: file:/var/cuda-repo-ubuntu2004-11-3-local Release: The following signatures couldn't be verified because the public key is not available: NO_PUBKEY F60F4B3D7FA2AF80

## Solution

Open a terminal and do the following:

```bash
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys F60F4B3D7FA2AF80
```

You should see something like this.

```
Executing: /tmp/apt-key-gpghome.oilfpoQHKE/gpg.1.sh --keyserver keyserver.ubuntu.com --recv-keys F60F4B3D7FA2AF80
gpg: key F60F4B3D7FA2AF80: public key "cudatools <cudatools@nvidia.com>" imported
gpg: Total number processed: 1
gpg:               imported: 1
```

## Explanation

The missing keys are fetched from keyserver.ubuntu.com
