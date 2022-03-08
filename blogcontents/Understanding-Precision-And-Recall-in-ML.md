---
title: "Understanding Precision and Recall in Machine Learning Context"
author: "Ajai Chemmanam"
date: "2022-03-08"
---

Measuring the effectiveness of a solution is often relative to the problem it solves.
Accuracy is not always the final word in terms of performance metrics of a machine learning model.

The costs associated with missing a detection and getting a wrong detection provides the basis of valuing precision and recall.

## TP vs FP vs TN vs FN

A machine learning classifier model's predictions can have one of four possible outcomes.
Ideally we want maximum truth outcomes and minimal false outcomes.

### In Image Classification Context

True Positive (TP) = The model correctly classified the image contained an object.

False Positive (FP) = Model predicted the presence of the object, but the image didn't really have one.

True Negative (TN) = The model correctly didn't predict the presence of object as the image didn't contain an object.

False Negative (FN) = Model couldn't predice the presence of object, but the image did contain an object.

### In Object Detection Context

True Positive (TP) = Both detection and classification are correct. ie, the model correctly drew the correct sized bounding box on top of the object and detected as the right object.

False Positive (FP) = The model drew a bounding box in a place where it wasn't supposed to. This occurs most often when objects look similar to each other, and can be reduced by labeling the object confusing the model.

True Negative (TN) = No detections and classification were made. The model correctly didn't predict an object as the object was not in the image.

False Negative (FN) = Object was present in the image, but the model did not draw a bounding box. This occurs most often when the object is seen at a weird angle, lighting, or state not captured in the model's training data. It can be reduced by increasing object representation in the training data.

## Precision and Recall

Precision is given by

True Positives / (True Positives + False Positives)

Practically, this metric tells us how much we can trust this model that it's prediction being a true positive out of all the positive predictions.
A high precision value means there were very few false positives and the classifier is very strict in the criteria for classifying something as positive.

Recall is given by

True Positives / (True Positives + False Negatives)

Recall tells us how much we can trust the model in predicting all the positive predictions out of all predictions.
A high recall value means there were very few false negatives and that the classifier is more permissive in the criteria for classifying something as positive.

Now let's look at an example and see how Precision and Recall is calculated.
Consider a ball detection model and give images of 1000 ball to detect.
If it successfully detects 500 ball (TP), incorrectly detects 300 ball (FP), and fails to detect 200 ball (FN).
Then the model has a precision of 500/(500+300) = 500/800, or 62.5%.
And the model would have a recall of 500/(500+200) = 500/700, or 71%.

## What should our model have? More precision or More recall?

The answer to this question depends on the problem you are trying to solve.

For some cases, a model with higher precision may be better than a model with higher recall.
Eg. In email spam classification, where false negatives are much more tolerable than false positives.
It doesn't matter if we occasionally find a spam email in your inbox, but having good emails classified as spam can be problematic.

And in some cases a model with higher recall may be prefered.

For example, In medical scenarios false positives are more acceptable than false negatives.
It's ok if we misclassify healthy people as members of the positive class (has disease).
On further diagnostics, we can avoid such people.

But missing a person who needs treatment, on the other hand, is something we don't want.
In this type of problem we want very high recall values:
We need to try to find as many members of the positive class as possible.

### Other metrics

Other than Precision and Recall metrics like mean average precision (mAP), F1 Score, Area Under Curve (AUC), ROC etc. also give better insights to our model's performances. We will have more detailed blog on these metrics later.
