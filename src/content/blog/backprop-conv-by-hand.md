---
title: "Backprop by hand: deriving convolution gradients"
description: "Walking through the math of the convolution backward pass — the part most tutorials quietly skip."
pubDate: 2026-06-14
tags: ["deep-learning"]
draft: false
---

Most tutorials show you `conv2d` forward and then wave their hands at the backward
pass. When I wrote LeNet-5 in pure NumPy, I couldn't wave my hands — I had to
derive every gradient.

## The setup

A convolution is just a lot of dot products with shared weights. That weight
sharing is exactly what makes the backward pass interesting: each weight touches
many output positions, so its gradient is a **sum** over all of them.

> The forward pass is correlation; the gradient w.r.t. the input is a *full*
> convolution with the flipped kernel.

That single sentence took me an afternoon to actually believe. Once it clicked,
the implementation was about fifteen lines.

This is a placeholder post — replace it with your own from the `/admin` editor.
