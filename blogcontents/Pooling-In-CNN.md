---
title: "Pooling in CNN"
author: "Ajai Chemmanam"
date: "2022-04-05"
---

## Pooling in Convolutional Neural Networks

Convolution Layers create feature maps of the input images, but these features are position variant i.e, these features changes according to the position of the object. This problem is addressed by downsampling (reducing the size of feature maps)the images with major features still intact.

The 2 common methods of pooling are :

#### Average Pooling:

It takes the average representation of features in the feature map

#### Maxpooling:

It calculates the maximum value of features in the feature maps

### Advantages Of Pooling:

- This makes the model positionally invariant, i.e; The feature maps are robust to the changes in the position.

- It can reduce the computational load by reducing the resolution

- By discarding lower valued pixels, max pooling can reduce overfitting to an extent.
