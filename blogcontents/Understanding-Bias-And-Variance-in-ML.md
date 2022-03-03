---
title: "Understanding Bias and Variance in Machine Learning Context"
author: "Ajai Chemmanam"
date: "2022-03-03"
---

Bias and Variance are two most important terms in Machine Learning context. In this blog, we try to understand Bias and Variance tradeoff.

### What is Bias?

Bias is the error between average model prediction and ground truth.
The bias of the estimated function tells us the capacity of the underlying model to predict the values.

### What is Variance?

Average variability in the model prediction for a given dataset.
The variance of the estimated function tells you how much the function can adjust to the change in dataset.

### High Bias vs High Variance

High bias normally represents overly simplified model / underfitting model and results in getting high error on both test and train data.
On the other hand, High variance usually represents overly complex model / over fitting model.
The error will be low on train data and high on test data.
This is because it starts to learn the noises in the train data.

### Bias vs Variance Tradeoff

![Bias vs Variance Tradeoff](/static/blogImages/variance_bias.png)

Both bias and variance are inversely dependent on each other.
Increasing the bias reduces the variance and vice versa.
The error of the model is given by

Error = bias^{2} + variance + irreducible error.

The best model is obtained when the error is minimised.
