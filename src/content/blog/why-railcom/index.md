---
title: "Why RailCom"
date: 2026-10-12
description: >-
  Block detection says a block is busy. RailCom says who is in it,
  and on a big layout one detector in the booster says a surprising
  amount.
tags: [railcom]
draft: true
---

Analogue block detection tells you a block is occupied. It does not
tell you by what. On a small layout that hardly matters: you can
see the train. On a large club layout with a continuous run and
three or four trains circulating at once, it matters a great deal,
and it is the problem that got me into this.

## The problem with a loop

Picture the main line at a club: a long loop, several trains
running, operators coming and going. Block detection lights up the
mimic panel as each train passes, and from the pattern of lights an
experienced operator can work out which train is which. A less
experienced one cannot, and nobody can when two trains close up or
one stops out of sight. Worse, when a train derails or stalls on
the far side of the room, the first anyone knows is that a block
has stayed lit for too long, or that another train has arrived
behind it.

Block detection is answering the wrong question. The question is
not "is this block busy?" but "where is the 4-6-0, and is it still
moving?"

## What RailCom adds

RailCom lets the decoder in the locomotive talk back. After every
DCC packet the command station opens a short gap in the track
signal, and in that gap the decoder sends a few bytes: its address,
and if asked, a CV value, its speed, its temperature, the voltage it
sees. A detector on the track picks that up. The
[introduction](/docs/railcom/introduction/) on this site goes
through what it can send; the short version is that a RailCom
decoder can say who it is and how it is doing.

Most people meet RailCom as a block detector that reads the
address, so the panel shows "4-6-0" instead of a light. That is
good, and it is what the standard describes. But it is not the
thing that convinced me.

## One detector in the booster

There are two kinds of RailCom detector. A local one sits in the
feed to a block and hears only that block. A global one sits in the
command station or booster and hears every reply from every block
that booster powers. It cannot say where a reply came from. It can
say a lot else.

Take the loop with four trains on it. A locomotive that is being
driven is addressed by the command station many times a second,
and a RailCom decoder answers every time. So a single global
detector, with no block wiring at all, knows that four locomotives
are answering. If one derails, or stalls on a dirty rail, or loses
a pickup, it should stop answering, and the detector would then
know which address has gone quiet. That would be derailment
detection for a whole booster district from one small circuit in
the booster feed, with no change to the track. How quickly a
decoder falls silent, and how quickly it comes back, is one of the
things this project is going to measure on a circle of track.

The same detector hears whatever else the decoders choose to send.
A ZIMO decoder on my bench reports its real speed, its temperature,
the track voltage it sees and the share of DCC packets it failed to
receive. After three hours of running at an exhibition, that last
one is the number that tells you a locomotive's wheels need
cleaning before it fails in front of the public, and the voltage
tells you which end of the layout has a weak feed. Put a new
locomotive on the track and the detector hears its address at once,
so "what number is this one?" stops being a question, and with
automatic logon the throttle gets its name as well.

None of this replaces block detection. A locomotive without RailCom
says nothing, and so does a rake of coaches; occupancy still needs
current sensing, and a local RailCom detector can do both from the
same sense resistor. But the global detector is the cheap, high
value part, and in my experience it is the part clubs overlook.
One per booster, and the layout starts telling you what is
happening on it.

## So, detectors

That is why this project is building detectors rather than buying
them: to find out, on a scope, what decoders really send, how weak
the signal gets on a long run of club track, and what a detector
has to do to read it reliably. The posts that follow are the bench
results, starting with the first decoder that answered.
