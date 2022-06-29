---
title: "Learning Rate Hyperparameter in Neural Networks"
author: "Ajai Chemmanam"
date: "2022-04-09"
---

## Learning Rate

Learning rate is a hyperparameter which controls the rate at which the weights of a network are updated.

It controls how quickly a model adapts to the problem, small learning rate means more training due to smaller changes to weights & larger rates mean rapid changes in weight values.

The values or learning rates generally lie in the range (0,1).

#### 𝗣𝗿𝗼𝗯𝗹𝗲𝗺𝘀:

- If the values of learning rates are too high the model converges to a suboptimal solution

- If the learning rate is too small the weights do not get updated and training gets stuck.

#### 𝗧𝗵𝗲𝘀𝗲 𝗽𝗿𝗼𝗯𝗹𝗲𝗺𝘀 𝗰𝗮𝗻 𝗯𝗲 𝘁𝗮𝗰𝗸𝗹𝗲𝗱 𝗯𝘆:

- Decreasing the value of the learning rate with each increasing epoch.

- Dropping the value of the learning rate with a predetermined value at regular intervals.

- Increasing or decreasing the learning rate based on gradient values.
