---
title: "Optimising Neural Networks"
author: "Ajai Chemmanam"
date: "2022-04-09"
---

## Neural Networks

Neural Networks are a complex interconnected set of layers used in Deep learning.
Often, for the deep learning projects to be deployed, it needs to be optimised in terms of both size & accuracy.
Most of the Neural Network models are very large in size and requires some sort of optimisation before usage.

There are mainly 2 types of methods we use for model size reduction called quantisation & pruning

### 𝗤𝘂𝗮𝗻𝘁𝗶𝘀𝗮𝘁𝗶𝗼𝗻:

Quantisation is the process by which the values in the weights of a model are mapped to a finite range of discrete values.
This can be achieved by Rounding Off, Scaling the decimal parts of the weight.

Generally, the weights of a neural network are represented as Float32 bits (Upto 32 decimal points).
For performance improvement during mathematical operation, they can be rounded of to 8 or 16 decimal points.

Quantization brings improvements via model compression and latency reduction.

There are two forms of quantization:

#### Post-training Quantization

Quantization can be done after training, during deployment stage. 
These techniques generally depends on the type of hardware that we are trying to deploy to.
Quantization can lead to decrease in model size and latency with marginal decrease in accuracy.

#### Quantization aware training

Quantization aware training applies quantization during the training process itself.
This helps the models to recover and reduce the decrease in accuracy.

### 𝗣𝗿𝘂𝗻𝗶𝗻𝗴:

Most of the weights in a neural network are sparse & do not impact the performance, the process of removing sparse weights from a neural network is called pruning.

In simpler terms, pruning is the process of trimming insignificant weights in a neural network.

Magnitude-based weight pruning gradually zeroes out model weights during the training process to achieve model sparsity. Sparse models are easier to compress, and we can skip the zeroes during inference for latency improvements.
