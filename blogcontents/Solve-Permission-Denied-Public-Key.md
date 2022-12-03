---
title: "Solve Permission denied (publickey)"
author: "Ajai Chemmanam"
date: "2022-12-03"
---

Whenever we take a compute instance from cloud services like AWS, they often provide a .pem file for logging into the instance.

## Problem

When we try to login via ssh using these .pem files using the command

```bash
ssh -i filename.pem username@ipaddress
```

We get the following error if the permissions of the .pem file is not correct

```bash
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@         WARNING: UNPROTECTED PRIVATE KEY FILE!          @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Permissions 0644 for 'filename.pem' are too open.
It is required that your private key files are NOT accessible by others.
This private key will be ignored.
Load key "filename.pem": bad permissions
username@ipaddress: Permission denied (publickey).
```

## Solution

Open a terminal where the .pem file is located and do the following

```bash
chmod 400 filename.pem
```

You will now be able to login to the remote server using the .pem file

## Explaination

The permission of the file decides which users/usergroups can access or execute it.
A secret file like .pem needs more restricted permission to improve security.
