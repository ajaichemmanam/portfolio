---
title: "Vanishing and Exploding Gradient Problems"
author: "Ajai Chemmanam"
date: "2022-04-13"
---

## Vanishing & Exploding Gradient Problem

Neural Networks update their weights during Back Propagation. This optimises the weights for better results. There are mainly 2 problems that occur during this optimisation

### Vanishing Gradient Problem:

The Vanishing Gradient Problem occurs when the gradients approach zero and weights remains nearly unchanged. As a result the model never converges to the optimum result.

This may happen because of small values of the derivatives of the activation function.

### Exploding Gradient Problem:

The Exploding Gradient Problem occurs when the gradients keep on getting larger. This in turn moves the gradients away from the optimum result.

This may happen due to the random initialisation of weights with larger values.
