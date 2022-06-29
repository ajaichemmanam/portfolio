---
title: "Dealing with Outliers"
author: "Ajai Chemmanam"
date: "2022-04-14"
---

## Vanishing & Exploding Gradient Problem

Outliers can be a nightmare for you if you don’t treat them properly. Outliers can cause problems during model fitting and also affect the evaluation metrics.

Here are some ways you can deal with outliers.

### Box plots

Box plots are a visual method to identify outliers. Box plots is one of the many ways to visualize data distribution.
Box plot plots the q1 (25th percentile), q2 (50th percentile or median) and q3 (75th percentile) of the data along with (q1–1.5*(q3-q1)) and (q3+1.5*(q3-q1)). Outliers, if any, are plotted as points above and below the plot.

### IQR method

IQR method is used by box plot to highlight outliers. IQR stands for interquartile range, which is the difference between q3 (75th percentile) and q1 (25th percentile). The IQR method computes lower bound and upper bound to identify outliers.
Lower Bound = q1–1.5*IQR
Upper Bound = q3+1.5*IQR
Any value below the lower bound and above the upper bound are considered to be outliers.

### Z-Score

Z-score is a measure of a point’s relationship to the average of all points in the dataset. When scored, the values receive a positive or negative number. This number is the number of standard deviations above or below the average value.

### Scatter plot

A scatter plot is a chart type that is normally used to observe and visually display the relationship between variables. The values of the variables are represented by dots. The positioning of the dots on the vertical and horizontal axis will inform the value of the respective data point

### Violin plot

Violin plots also give insights into the data and helps in detecting outliers.
