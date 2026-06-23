---
title: "Go (围棋) AI engine"
venue: "RL · Search"
year: 2026
image: "/uploads/go-ai.png"
url: "https://github.com/MichaelFu627"
authors: "PyTorch · ResNet · PUCT/MCTS · FastAPI · Vite"
links:
  - { label: "Code", url: "https://github.com/MichaelFu627" }
order: 2
featured: true
---

- A 9×9 Go engine with full rule enforcement, including **superko via Zobrist hashing**.
- A **dual-head ResNet** guided by **PUCT search**, trained through a self-play pipeline on Apple MPS.
- Served from a FastAPI + Vite web app.
