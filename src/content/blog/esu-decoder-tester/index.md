---
title: "An essential tool: ESU's Profi-Prüfstand decoder tester"
date: 2026-10-18
description: >-
  A decoder on the bench with a motor, a speaker, every socket and no
  locomotive in the way. Every bench capture this project has made
  went through it.
tags: [bench]
draft: false
---

If this project has one essential tool besides the oscilloscope,
it is ESU's Decoder Tester, article 53900, which ESU's German
catalogue calls the "Profi-Prüfstand für Decoder", the professional
test stand for decoders. It arrived a month before any of the
RailCom work started, on the simple grounds that a project about
decoders needs a way to run one without a locomotive round it.
Every bench capture since has gone through it, and it deserves a
post.

## What it is

A small board with a socket for every decoder interface you are
likely to meet, a coreless motor with a flywheel so the decoder has
a real load to drive, a row of LEDs that show the headlight, rear
light and function outputs, a small loudspeaker for sound decoders,
and two terminals for the track feed from a command station or
programmer. Plug a decoder in, connect the track feed, and it is a
locomotive as far as the decoder knows, with none of the bodywork,
pickups or wheels that make a real one awkward to probe.

The one on this bench is the current version, article
[53900](https://www.esu.eu/en/products/decoder-tester/), which
takes NEM 651, NEM 652, 21MTC, PluX22 and PluX16, Next18 and E24
decoders plus bare wires on screw terminals, and has an extension
port for the 53901 board that adds large-scale decoders. There is
an earlier version, the "Profi-Tester", with NEM 651, NEM 652 and
21MTC only, which ESU now
lists under
[former products](https://www.esu.eu/en/products/former-products/decoder-tester/)
without an article number; its manual on ESU's
[download page](https://www.esu.eu/en/downloads/instruction-manuals/decoder-tester/)
is filed as article 51900, dated 2012. If you are buying, check
which one is in the box.

## Why it matters here

The first RailCom replies this project captured came from a ZIMO
MN150 that had never been inside a locomotive. It was plugged into
the tester, the tester was wired straight to the command station
through a sense resistor, and the scope went across the resistor.
No track, so no wheel and rail noise, no pickup dropouts, no layout
wiring: just the decoder, the station and the signal between them.
That is the clean baseline that everything on real track is
compared with.

It also makes decoders interchangeable. A ZIMO goes in, a run is
captured, it comes out; a DCCconcepts goes into the same socket and
gets the same test with nothing else changed. When one of them
sends nothing at all, which happened, you know it is the decoder
and not the wiring.

The flywheel earns its place too. A decoder's motor control
behaves differently with a real inertial load from how it behaves
with nothing on the output, and the speed a decoder reports over
RailCom means nothing unless a motor is actually turning. The
tester gives it one, quietly, on the desk.

## The one thing it does not do

It is not track. Dirty rails, a bad joint and a locomotive losing
its pickup for a tenth of a second are exactly the things a
detector has to cope with, and the tester hides all of them. So the
rule here is: first on the tester, to learn what the decoder sends;
then on rails, to learn what the layout does to it. Posts on both
to follow.
