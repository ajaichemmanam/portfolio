---
title: "Heard of Arguments in Python Print command?"
author: "Ajai Chemmanam"
date: "2022-03-17"
---

Did you know that the commonly used python print command had some useful arguments for all these times?
As we all know, The print() prints a string (or any other object - the object will first get converted into a string) onto a screen.
This blog introduces you to two arguments of print() in python. The sep and end arguments.

Create a simple python .py file and copy the following content.

```python
print("Hello", "World")
print("This is my second sentence")
```

```
Hello World
This is my second sentence
```

See the output of the file. This is the default behaviour of print() in python.
Now let's see what the sep and end arguments do in python print().

## Sep Argument

Run another python script after copying the following content.

```python
print("Hello", "World", sep = "-")
```

The output will be like this.

```
Hello-World
```

The default value for sep is " ", which makes the comma seperated words to join with a space in between.

## End Argument

Run another python script after copying the following content.

```python
print("Hello", "World", end = "-")
print("Second Sentence")
```

The output will be like this.

```
Hello World-Second Sentence
```

The default value for end argument is "\n" which prints the second print statement in a new line
