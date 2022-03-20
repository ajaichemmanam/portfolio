---
title: "Use Xquartz On Mac To View Ubuntu GUI"
author: "Ajai Chemmanam"
date: "2022-03-20"
---

I was working with a remote Ubuntu machine through the VSCode remote SSH.
I was stuck at some point that requires some output images or graphs to be displayed when I run some code on the remote machine.
When I searched for a solution, I see many other users also face the same issue, especially when they are working with headless cloud servers like AWS EC2 instances that doesn't come with GUI.

Let's say I created a simple python script to read and display an image.

```python
import cv2
image = cv2.imread("/home/AJC/output.jpg")
cv2.imshow("image", image)
cv2.waitKey(0)
```

But when I tried to run it through ssh, An error threw up as I don't have a GUI to display the output window.

```
qt.qpa.xcb: could not connect to display
qt.qpa.plugin: Could not load the Qt platform plugin "xcb" in "/usr/local/lib/python3.8/dist-packages/cv2/qt/plugins" even though it was found.
This application failed to start because no Qt platform plugin could be initialized. Reinstalling the application may fix this problem.

Available platform plugins are: xcb.

Aborted (core dumped)
```

So my requirement was to visualise GUI opening up in a remote Ubuntu machine to open up in my Macbook Pro.

The first thing to do is to install XQuartz (https://www.xquartz.org/) on my macbook

```bash
brew install --cask xquartz
```

Once it's installed, open xQuartz from your Applications.
Then on the top menu open a xQuartz terminal.

ssh into your remote system. `ssh -Y username@ip`. Make sure you include -Y

It will look like a normal ssh terminal.

Type `xclock` or `xclock -digital` to open clock. It's actually a Ubuntu app but it's showing in your local system through xQuartz.

![Clock through xQuartz](/static/blogImages/xquartz-clock.png)
![Digital Clock through xQuartz](/static/blogImages/xquartz-clock-digital.png)

Now type `xcalc` to open up a calculator from remote machine
![Calculator through xQuartz](/static/blogImages/xquartz-calc.png)

To open a web browser, type `firefox` or `firefox http://www.google.com` to open the Firefox from remote Ubuntu machine.
![Firefox through xQuartz](/static/blogImages/xquartz-firefox.png)

The performance of the display is a bit poor, even with a good internet connection. But it can be beneficial to see some output images or graphs than interacting with it.

That's it now you can open any GUI application running on remote Ubuntu now on your system.

I will talk about setting up Visual Studio Code remote SSH and linking xQuartz to display results on a future blog post.
