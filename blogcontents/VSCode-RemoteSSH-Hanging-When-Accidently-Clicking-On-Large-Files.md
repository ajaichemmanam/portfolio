---
title: "Solving VSCode RemoteSSH Hanging When Accidently Clicking On Large Files"
author: "Ajai Chemmanam"
date: "2022-03-13"
---

Ever since I started programming, VS Code is my all in one tool, whether it's prograaming, notes taking, writing research papers with latex.
When I started using it to access remote machines, through VS Code Remote SSH Extension, everything was working fine until I accidently clicked a large file.
The program hangs until the clicked file is downloaded or even disconnects.
Often it tries to reconnect again and again.

The only way was to wait until large files get downloaded completely or restart the vscode and access the remote machine again. I was searching for plugins or any other settings that helps to prevent accidentally opening large files.

Finally I found a way to solve this issue.

- Open VS Code Settings (cmd+shift+p) and then open Preference: Open Settings

- Search for the setting "workbench.list.openMode" and set it to doubleClick.

The default setting for vscode is singleClick, which was causing the accidental opening of the files. Once this setting is saved, you will have to double click a file to open it.

I know, many of you, finds it easier using single click file opening. Please let me know any other solution to solve this issue.
