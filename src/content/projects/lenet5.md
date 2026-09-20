---
title: "LeNet-5 in pure NumPy"
venue: "Deep Learning"
image: "/uploads/lenet5.jpg"
url: "https://huggingface.co/spaces/MichaelFu627/lenet5"
authors: "NumPy · im2col + BLAS · Three.js · Hugging Face Spaces"
links:
  - { label: "Live demo", url: "https://huggingface.co/spaces/MichaelFu627/lenet5" }
  - { label: "Code", url: "https://github.com/MichaelFu627/lenet5" }
order: 4
featured: false
---

- A complete convolutional network — convolutions, pooling, backprop, and the full training loop — implemented in pure NumPy with no deep-learning framework. The point wasn't to replace frameworks, but to understand exactly what they do under the hood.
- Optimized the convolutions with im2col + BLAS for an ~11× speedup; the model reaches 96.3% accuracy on MNIST.
- Packaged with an interactive Three.js visualization and deployed to Hugging Face Spaces so anyone can explore it in the browser.
