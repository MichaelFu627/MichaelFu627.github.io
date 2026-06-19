---
title: "PUCT, explained with a 9×9 Go board"
description: "How the exploration term balances policy priors against visit counts during self-play."
pubDate: 2026-05-28
tags: ["search"]
draft: false
---

When I built my Go engine, the search was the part I understood least and ended
up loving most. PUCT is the rule that decides, at every node, which move to try
next.

It trades off two things: how good the policy network *thinks* a move is, and how
little we've actually *explored* it. Early in a search, priors dominate; as visit
counts grow, the empirical value takes over.

Replace this placeholder with the real write-up whenever you're ready.
