---
title: "ESU on real track: silent the instant the wheels are"
date: 2026-10-16
description: >-
  First test on rails rather than a test board: an ESU-fitted tram, replies while moving, silence the moment pickup fails.
tags: [bench, railcom, decoders]
draft: true
---

The first decoder tested on rails rather than wired to the
station: an ESU decoder in an N gauge tram, model not yet
identified. RailCom was off as delivered and on with one CV29 bit.

**Placeholder.** This post is a draft. It is to cover:

- as delivered: RailCom off, switched on by CV29 bit 3
- what it sends: channel 1 address, channel 2 acknowledgements
- moving at step 1: replies while moving, silence the instant pickup fails
- the bad rail joint: dropouts of 57 ms to over a second, back at once after
- why that matters: for a global detector, silence means lost contact
- what is still to test (POM reads, start-up delay)
- do not publish until the silence-on-pickup-loss result is repeated
  on a circle of track rather than the short test length
- keep ESU register meanings out; model unidentified, say so
