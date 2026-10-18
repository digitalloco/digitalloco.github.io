---
title: RailCom introduction
description: >-
  Why you would want RailCom: which locomotive is in a block, live
  data from the decoder, CVs read on the main, automatic logon, and
  what you need to get it.
order: 0
updated: 2026-10-18
---

RailCom lets a DCC decoder talk back. After each DCC packet the
command station opens a short gap in the track signal, the cutout,
and during it a decoder can send a few bytes: its address, a CV
value, its speed or its state. A detector on the track picks this
up, so the layout learns which locomotive is in which block and can
read CVs on the main without a programming track.

If you run DCC with ordinary block detection, you already know
which blocks are occupied. RailCom adds who is in them, and what
they have to say. This page is about why you would want that. The
documents that define it are on the
[RailCom standards](/docs/railcom/standards/) page.

## Summary

A RailCom decoder can send five kinds of thing.

- **Its address**, so a block detector can say which locomotive is
  in the block, and a command station can say what address an
  unknown locomotive has.
- **Live values** such as real speed, motor load, temperature,
  track voltage and fuel or water level, when the decoder chooses
  to send them.
- **CV values**, in reply to a read on the main, so a decoder can
  be read and checked without a programming track.
- **Logon data**, so a new locomotive appears in the throttle by
  name as soon as it is put on the track (DCC-A).
- **Accessory state**, so a turnout decoder reports its position
  and can say when it was thrown by hand.

Getting any of them needs three parts that all support RailCom: a
command station or booster that makes the cutout, a decoder with it
switched on, and a detector to listen.

## Two kinds of reply

The cutout has two time slots, and they are used differently.

- **Channel 1 is a collective shout.** After any driving command,
  every RailCom locomotive on the track sends its own address,
  whether or not the command was for it.
- **Channel 2 is an answer.** Only the locomotive the command was
  addressed to replies, and it replies with data: a CV value, its
  speed, a status.

## Two kinds of detector

- **A global detector** sits in the command station or booster and
  hears every reply from every block that booster powers. It knows
  what was said, not where from.
- **A local detector** sits in the feed to one block and hears only
  that block. It adds the "where". Its sense element can also
  measure the block's current outside the cutout, which is what
  your present occupancy detector does, so it still reports a
  train that says nothing: a locomotive without RailCom, or stock
  with resistor wheelsets.

## Which locomotive is where

A local detector can name the train in its block in two ways.

Listening to channel 1 is the simple way: read the address every
locomotive shouts. It fails when two locomotives share a block,
because they shout over each other. RCN-217 has only the leading
locomotive of a consist shout, and lets a decoder stop shouting
once the command station has addressed it a few times, but a block
with two independent locomotives in it is still a problem.

Listening to channel 2 avoids that. The detector reads the DCC
packets as well as the replies, so when a reply follows a command
to locomotive 1234, it knows 1234 is in its block, whatever else
is there. Any reply will do, since a running locomotive is
addressed many times a second.

> **Commentary (2026-10-18):** channel 2 is the better signal for
> a layout where blocks can hold more than one locomotive, and we
> believe most current decoders answer on it; that is to be
> confirmed decoder by decoder, and the decoder index planned for
> this section will record it. Channel 1 remains the way to hear a
> locomotive nobody is driving.

A global detector hears the same shout, which answers "what
address is this locomotive?" for anything put on the track.

## Live data from the locomotive

A decoder can send values about itself, each tagged with what it
is. RCN-217's list includes real speed in km/h, motor load,
temperature, the track voltage the decoder sees, fuel, water or
sand level for up to twelve "containers", the share of DCC packets
it failed to receive, stopping distance, and warnings. All of them
are optional: the decoder decides what to send and when, so what
you get depends on the decoder. They go to the command station,
not to the block detector, unless the block detector reads channel
2 as well.

## Reading CVs on the main

Without RailCom, programming on the main is write-only: the command
station sends a value and hopes. With RailCom the decoder answers a
read with the CV's value, so you can read a decoder's settings with
the locomotive on the layout and check that a write took. For most
people this is the feature that retires the programming track.

## Put it on the track and drive it

DCC-A, defined in RCN-218, is automatic logon. In the standard's
own words, the aim is "to have a vehicle available in the throttle
immediately after railing, with its name and all its properties":
unpack, put it on the track, go. It runs over RailCom, so RailCom
has to be working first. RailComPlus is an older, proprietary
scheme from ESU and Lenz that does the same job and is not in any
RCN.

## Feedback from turnouts and signals

Accessory decoders talk back too. A turnout decoder reports its
position after each command, and can raise a request when it has
something to say unasked, for example that a turnout was thrown by
hand. The command station polls for these from time to time.

## What you need

1. **A command station or booster that makes the cutout.** Without
   the gap, nothing is sent.
2. **A decoder with RailCom switched on.** CV29 bit 3 turns it on;
   CV28 chooses what it sends. Decoders without RailCom, or with it
   off, stay silent during the cutout and run normally.
3. **A detector**, global, local or both. RCN-217 allows two in
   series, so the usual arrangement is one global detector in the
   booster and one local detector per block. RCN-217 notes the
   circuits were tested over 100 m of track on club layouts.

### The case for a global detector

> **Commentary (2026-10-18):** most RailCom detectors sold are
> local ones, one per block, and that is the use the standard
> describes. The global detector is underrated, most of all on a
> large club layout. Subject to what the decoder sends, it tells
> you:
>
> - whether each of several trains running round one loop is still
>   on the rails: a driven locomotive answers every command, so one
>   that falls silent has stalled, derailed or lost pickup, with no
>   block wiring at all;
> - how a locomotive is doing after hours of running: load, speed,
>   temperature, the track voltage it sees, and the share of
>   packets it missed, which shows a dirty wheel or a weak feed
>   before it becomes a failure;
> - what address an unknown locomotive has the moment it is put on
>   the track, and with DCC-A its name and properties too;
> - the value of any CV read on the main, since that reply goes to
>   the command station, not to a block.
>
> A reply only reaches the booster that powers that section, so a
> layout with several boosters needs a global detector in each.

### Choosing a decoder

> **Commentary (2026-10-18):** the three parts come from different
> makers more often than not, and the standard leaves most of what
> a decoder sends optional. A decoder that "supports RailCom" may
> send only its address. The next page in this section will index
> decoders by maker and model with the RailCom features each one
> documents, so that you can tell before buying.
