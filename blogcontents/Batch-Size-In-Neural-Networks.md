---
title: "Batch size in Neural Networks"
author: "Ajai Chemmanam"
date: "2022-04-06"
---

## Batch size in Neural Networks

Batch size is a common term used while training a neural network. Ever wondered why we need to pass data to networks in batches?

Batch Size defines the amount of data passed through the network in a single propagation.
Consider 1000 data with you, You pass it through the network as a set of 100.
Then you need to propagate through the network 10 times to complete an epoch.

As a common practice, we usually take batch size as a multiple of 8 Eg. 8,16,32 etc.
The number usually is based on how much data we can fit into the memory at a time, to avoid running out of memory while training.

### Advantages:

Training a Model using Batyches have the following advantages:

- Training requires less memory since you only need to load a small amount of data at once

- Training can occur faster since the weight is updated after each propagation so the model needs not to wait for the entire data to update the weights.

### Disadvantages:

Along with these advantages there is also a downfall:

- As the batch size decreases it becomes harder to estimate the gradient, there will be more fluctuations.
