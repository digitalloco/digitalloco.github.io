---
title: "First look at the cutout"
date: 2026-10-14
description: >-
  A DCC-EX command station on the oscilloscope: the gap after each packet where a decoder gets to speak.
tags: [bench, railcom]
draft: true
---

Before a decoder can reply there has to be a gap for it to reply
in. This is what that gap looks like on a DCC-EX EX-CSB1, measured
with a PicoScope.

**Placeholder.** This post is a draft. It is to cover:

- the set-up: EX-CSB1, firmware version, which track output, how
  RailCom was switched on
- the trace: where the cutout starts and ends relative to the packet end bit
- how that compares with the limits RCN-217 gives
- one or two scope images
- what was learned for the detector design
