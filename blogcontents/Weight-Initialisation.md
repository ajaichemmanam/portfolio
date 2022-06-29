---
title: "Weight Initialisation"
author: "Ajai Chemmanam"
date: "2022-04-11"
---

## Weight Initialisation

Initialising the weights of neural networks during training is a crucial task to get maximum accuracy, it can affect how fast a model converges. If the models are not initialised efficiently it might even give rise to Exploding & Vanishing Gradient Problems.

fanin = Number of input to a neuron
fanout = Number of output from a neuron

### Types Of Weight Initialisation Include:

#### Zero Initialisation:

In zero initialisation, the weights are set as '0'. This is highly ineffective since every neuron same features during iteration making Neural Network similar to a linear model. It is also the same for 'Constant Initialisation'.

#### Random Initialisation:

Even though this introduces an asymmetry to the model, the random values might lead to Overfitting, Exploding & Vanishing Gradient Problems. Random Initialisation can be either Normal or Uniform Distribution.

#### Xavier Weight Initialisation:

This Initialisation is generally used along with the sigmoid activation function.

Xavier Normal:
Normal Distribution with mean `0` & `std = sqrt(2/(fanin+fanout))`

Xavier Uniform:
Uniform Distribution in range `[-sqrt(6/(fanin+fanout)), sqrt(6/(fanin+fanout))]`

#### He Initialisation:

This Initialisation is generally used along with the ReLU activation function.

He Normal:
Normal Distribution with mean `0` & `std = sqrt(2/fanin)`

He Uniform:
Uniform Distribution in range `[-sqrt(6/fanin), sqrt(6/fanin)]`
