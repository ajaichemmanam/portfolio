---
title: "Receptive Field of a CNN"
author: "Ajai Chemmanam"
date: "2022-04-01"
---

## Receptive Field of a CNN

### What is a receptive field?

π§π΅π² πΏπ²π°π²π½ππΆππ² π³πΆπ²πΉπ± is the region on the input side of a layer on which it operates at a time to give output as features. A larger receptive field ensures that larger objects are detected.

### How to add receptive field to a CNN?

- Adding more Convolutional Layers can increase the receptive field linearly

- Subsampling layers like pooling increase the receptive field multiplicatively

- Sequentially placed dilated convolution increases the receptive field exponentially

### ππ³π³π²π°ππΆππ² π₯π²π°π²π½ππΆππ² π³πΆπ²πΉπ±?

ππ³π³π²π°ππΆππ² π₯π²π°π²π½ππΆππ² π³πΆπ²πΉπ± represents the region that contains input area with an impact on the output. In CNN's, the pixels at the center of a receptive field have a larger impact on the output.

- Using Skip connections can reduce the effective receptive field.
