---
title: "Shipping a NumPy model to Hugging Face Spaces"
description: "Docker SDK Spaces, Git LFS for .npz weights, and the gotchas that cost me an evening."
pubDate: 2026-05-02
tags: ["mlops"]
draft: false
---

Training a model from scratch is one thing; getting it to run in a stranger's
browser is another. Here's the path I took to deploy my hand-written LeNet-5.

The short version: a **Docker SDK** Space, model weights tracked with **Git LFS**
so the `.npz` files don't bloat the repo, and a tiny server to glue it together.

Swap this out for your own deployment notes.
