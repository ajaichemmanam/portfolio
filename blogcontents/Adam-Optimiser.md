---
title: "Adam Optimiser in Neural Networks"
author: "Ajai Chemmanam"
date: "2022-04-04"
---

## Adam Optimiser in Neural Networks

Adam is an algorithm used for optimisation technique for gradient descent

The Adam optimiser uses momentum to accelerate gradient descent by considering the 'exponential weighted average' of the gradients. This means faster convergence to minima

- It also scales the values of the learning rate using squared gradients, making it invariant to the magnitude of the gradient.

- These properties make Adam overcome local minima & saddlepoint making it usable in a wide range of tasks including sparse gradients.
