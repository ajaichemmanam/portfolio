---
title: "Solve Address Already in Use Error"
author: "Ajai Chemmanam"
date: "2022-03-02"
---

Getting stuck on errors like "Address already in Use"?

## Problem

It is quite common that some ghost processes remain hold of certain ports.
The ports may be intentionally or unintensionally blocked.

Commonly used ports such as 3000, 5000 etc. are often gets blocked by node/python processes.

![Address already in use Error](/static/blogImages/address_used.png)

## Solution

Open a terminal and do the following for one time usage.

- Freeing up a single port. Eg. Port 3000 in this case.

```bash
kill -9 $(lsof -ti:3000)
```

- Freeing up multiple ports. Eg. Port 3000 and 3001 in this case.

```bash
kill -9 $(lsof -ti:3000,3001)
```

For Linux/Ubuntu systems:

```bash
sudo kill -9 `sudo lsof -t -i:3000`
```

To do this every time when a node server starts up.

Add to package.json file as follows

```json
"scripts": {
   "start": "kill -9 $(lsof -ti:3000,3001) && npm start"
}
```

## Explaination

lsof -ti:3000 command return the PID (Process ID) of the process which is using the port.
kill -9 command kills the process with the returned PID.
