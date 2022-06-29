---
title: "Anchored and Anchorless Object Detection"
author: "Ajai Chemmanam"
date: "2022-04-08"
---

## Object Detection

Object detection is a task in computer vision, which requires the algorithm to predict a bounding box with a category label (class) for each region of interest (ROI) in an image.

### Anchored Object Detection

Anchor boxes are pre determined boxes at different positions of an image with varying sizes and aspect ratio.
These are determined by analysing the training data, where and how the most common annotations are present.

Conventionally, anchor boxes are considered key for detectors.

#### Advantages

- Fastest method as it requires only a fixed number of boxes to be analysed.

#### Disadvantages

- The prediction is dependent on the size, number & aspect ratios of anchor boxes.

- Large number of anchor boxes for a small number of predictions

- Complex computation to calculate the IOU

### Anchorless Object Detection

In an Anchorless model, every pixel in the feature map is predicted with an object box, similar to segmentation.

#### Advantages

- Detection framework becomes similar to segmentation & key point detection enabling us to reuse ideas

- Detection becomes anchor free which lowers the computation & design parameters

- There is no dependence on the size of the anchor box for detection

#### Disadvantages

- Models will take longer to converge
