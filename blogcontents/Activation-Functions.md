---
title: "Activation Functions"
author: "Ajai Chemmanam"
date: "2022-04-12"
---

## Activation Functions

In an artificial neural network, activation functions decide the output of a node for a given input. It decides whether a node should be activated or not.

#### Importance & Properties Of Activation Functions

- It adds a non-linearity to Neural Networks

- It puts upper and lower bounds in the output of each node

- It should be Continuous, Monotonic & Differentiable.

Some commonly used Activation Functions are listed below

### Sigmoid Function

It is a continuous 'S' curve ranging from 0 to 1.

Equation: `Z = 1/(1+e^-x)`

### Tanh Function

It has similar structure of sigmoid function ranging from -1 to 1.

Equation: `tanh(x) =2/(1+e^-2x) -1`

### Relu Function

The most widely used activation function ranges from 0 - inf.It returns 0 if the input is less than or equal to 0.

Equlation: `Relu(x) = max(0,x)`
