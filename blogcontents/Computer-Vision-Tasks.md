---
title: "Computer Vision Tasks"
author: "Ajai Chemmanam"
date: "2022-04-07"
---

## Computer Vision

Computer vision is a subarea of AI and ML which deals with images and videos.
The algorithms usually helps the machines to understand the contents of the visual media.

### Computer vision Tasks

Computer vision tasks can be classified into different categories

#### Image Classification

It takes in an input image & classifies it into a class label along with some metrics.

##### Advantages

- Most basic computer vision tasks.

- Requires smaller networks when compared to other tasks.

##### Disadvantages

- The location of the class is not specified.

- Cannot be used to determine the number of objects in an image

- Images with more than one class cannot be predicted unless we use a multi label classification approach.

#### Object Detection

It takes in an input image and outputs the labels & location of the objects in an image using bounding boxes. The localization enables it to identify multi class classification & deal with objects with multiple occurrences.

##### Advantages

- Provides the position of the object within an images.

- Can be used to determine the number of objects in an image.

##### Disadvantages

- It does not give the shape of the object in an image.

#### Image Segmentation

In Image Segmentation, we mark the presence of an object by pixel-wise classification using masks for each object. This can help us in determining the shape of an object in the image

##### Advantages

- Provides the shape of the objects by pixel level classifiation between object and background.

- Can be used to determine the position and number of objects in an image.

##### Disadvantages

- Requires carefully labelled annotation over the shape of the object

- Requires much more complicated models.

Image segmentation can be further divided into

#### Instance Segmentation

The pixel wise classification is instance wise. Pixels from different instances of an object will be classifies seperately.

#### Semantic Segmentation

All pixels of the same class objects are segmented into on1.

#### Panoptic Segmentation

Both objects and background are segmented out in Panoptic Segmentation.
