---
title: "A DCC-EX EX-CSB1 makes RailCom cutouts, on the development firmware"
date: 2026-10-19
description: >-
  The ESP32-based DCC-EX command station produces a cutout after
  every packet on development version 5.9.10. How it was built, how
  it is switched on, and what the scope shows.
tags: [bench, command-station, dcc-ex, railcom]
draft: false
---

Before any decoder can be heard, the command station has to make
the gap for it to speak in. The station on this bench is a DCC-EX
EX-CSB1, the ESP32-based one. The RailCom cutout for this board
arrived on the development line and has not yet reached a
production release, so getting it means building the development
firmware. This post is how, and what the result looks like on a
scope.

## Building it

The DCC-EX [installer](https://dcc-ex.com/ex-installer/installing.html)
offers the latest production version, the latest development
version, or a specific version. The build on this bench is
development version 5.9.10, which I got by choosing "select a
specific version" and entering 9.9.9; that gave me the head of the
development branch. The previous development build, 5.9.9, would
not compile for me; 5.9.10 did.

One warning for anyone with the older Arduino Mega station: the
development line dropped the AVR boards at 5.9.0, so a Mega stays
on 5.6 and this does not apply to it.

## Switching it on

On the CSB1 the cutout is a per-track setting, not the global one.
The global command reports itself on and does nothing on this
board; what works is to declare the track as main and then add the
RailCom modifier:

```text
<= A MAIN>
<= A RAILCOM>
```

The setting does not survive a reboot, so it goes in the startup
automation file or gets sent again after power-up.

## What the scope shows

With a sense resistor in one track lead and a PicoScope across it,
there is a cutout after every packet, including idle packets, with
the two rails shorted together for its length as RCN-217 requires.
The standard lets a station end the cutout anywhere between 454
and 488 microseconds after the packet's end bit; this one holds it
to the full 488, the longest allowed. A decoder's reply has to be
finished by 454 whatever the station does, and the longest replies
seen so far on this bench do so with a few microseconds to spare.
Those are numbers the detector design has to respect, and they are
the kind of thing you learn from the track output, not from
reading the firmware.

A later post is what happened when a decoder was given that gap to
speak in.
