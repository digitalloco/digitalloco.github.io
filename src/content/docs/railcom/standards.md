---
title: RailCom standards
description: >-
  Who writes the RailCom standards, which documents define it, which
  edition is current, and which one to read first.
order: 1
updated: 2026-10-18
---

This page lists the documents that define RailCom and says which to
use. For what RailCom does and what it needs, start with the
[RailCom introduction](/docs/railcom/introduction/). Dates and
editions were checked against the publishers' own servers on the
date above. Text in a shaded box marked
**Commentary** is our opinion; everything else is from the documents
themselves.

## The standards bodies

Two organisations publish DCC standards, and RailCom appears in both
series.

The **NMRA** (National Model Railroad Association) is a US-based
hobbyists' association. Its S-9 series defines DCC and is where DCC
was first standardised. The NMRA publishes three kinds of document:
Standards (S), which a product must meet to conform; Recommended
Practices (RP); and Technical Notes (TN), which explain. All are free
PDFs in English, listed on the
[NMRA standards page](https://www.nmra.org/index-nmra-standards-and-recommended-practices).

**RailCommunity** (RailCommunity -- Verband der Hersteller
Digitaler Modellbahnprodukte e.V.) is an association of
manufacturers of digital model railway products, most of them in
Germany, Austria and Switzerland. Its RCN standards ("RailCommunity
Norm") cover the same ground as the NMRA's S-9 series, usually in
more detail, and are revised more often. They are free PDFs, in
German only, at `normen.railcommunity.de`. An RCN edition is
identified by the date on its cover ("Ausgabe"), not by a version
number.

RailCom itself began as a Lenz specification. Both bodies took it
from there: the NMRA in 2012, as a translation of the Lenz
document, and RailCommunity in 2016, as the first edition of
RCN-217. RailCommunity has revised RCN-217 many times since; the
approved NMRA text has not changed since 2012.

### Which document to read

Read **RCN-217**. It is the current, complete definition of RailCom:
the cutout, both channels, every datagram, and the rules for
decoders, command stations and detectors. It is in German, but its
tables carry most of the content, and a machine translation of the
prose is good enough to work from. MERG members have a better
option: English translations of the RCN series, made by a MERG
member with RailCommunity's approval, are on the MERG wiki behind
the member login. The German text remains the normative one.
Add **RCN-218** if you need
automatic logon (DCC-A), and **RCN-225** for the configuration
variables that switch RailCom on.

Use the NMRA's S-9.3.2 only for history. It is a 2012 snapshot and
lacks much that RCN-217 now defines. A rewrite is in draft and open
for public comment (see below), but it is not yet approved.

## At a glance

| Document | Publisher | Current edition | Language |
| -------- | --------- | --------------- | -------- |
| RCN-217 RailCom | RailCommunity | 24.11.2025 | German |
| RCN-218 DCC-A logon | RailCommunity | 27.07.2026 | German |
| RCN-211 Packet structure | RailCommunity | 27.07.2026 | German |
| RCN-225 Configuration variables | RailCommunity | 27.07.2026 | German |
| S-9.3.2 Basic decoder transmission | NMRA | December 2012 | English |
| S-9.3.2 rewrite (draft) | NMRA | 11 Sep 2026, draft | English |

## RCN-217: RailCom, DCC feedback protocol

The RailCom standard itself. Full title "RailCom --
DCC-Rückmeldeprotokoll" (DCC feedback protocol).

- **Current edition:** 24.11.2025
- **Get it:** [normen.railcommunity.de/RCN-217.pdf](https://normen.railcommunity.de/RCN-217.pdf)
- **Covers:** the cutout timing, the electrical format of the reply,
  the 4-of-8 coding of each byte, channel 1 (address broadcast) and
  channel 2 (the reply to the packet just sent), every datagram ID,
  and what decoders, command stations and detectors must do.

The first edition was dated 18.12.2016. Each later edition adds a
history table at the back saying what changed.

> **Commentary (2026-10-18):** the history table also has a column
> for the RailCom protocol version (1.0 up to 1.5). That is the
> version a decoder reports about itself, not a document revision,
> and several editions share the same number. Quote an edition by
> its cover date.

## RCN-218: DCC-A, automatic logon

How a decoder announces itself to the command station when it is
put on the track, so that the user does not have to enter its
address. The decoder's replies travel over RailCom, so a DCC-A
system needs RailCom working first.

- **Current edition:** 27.07.2026
- **Get it:** [normen.railcommunity.de/RCN-218.pdf](https://normen.railcommunity.de/RCN-218.pdf)

RailComPlus is an older, proprietary logon scheme from ESU and Lenz
that does the same job. It is not defined in any RCN; RCN-211 and
RCN-225 only reserve bits so that a product can say it supports it.

## Related RailCommunity documents

These are not RailCom standards, but they carry the switches that
turn it on.

- **RCN-211, packet structure** (27.07.2026):
  [RCN-211.pdf](https://normen.railcommunity.de/RCN-211.pdf).
  Defines how a command station reports its own capabilities,
  including bits for "supports RailCom per RCN-217", "supports DCC-A
  per RCN-218" and, new in this edition, "supports RailCom ID 12 on
  normal POM commands".
- **RCN-225, configuration variables** (27.07.2026):
  [RCN-225.pdf](https://normen.railcommunity.de/RCN-225.pdf).
  CV 29 bit 3 switches RailCom on in a decoder. CV 28 then sets what
  it sends: channel 1 address broadcast, channel 2 data, high-current
  RailCom, automatic logon and more.

## NMRA S-9.3.2: basic decoder transmission

The NMRA's RailCom standard: "Communications Standard for Digital
Command Control Basic Decoder Transmission".

- **Approved edition:** December 2012, submitted for approval in
  July 2012. Its cover says it is a direct translation of the Lenz
  RailCom specification v1.2 (May 2012), with the German as the
  primary authority.
- **Get it:** the NMRA no longer links the approved text. The
  [Internet Archive copy](https://web.archive.org/web/20230309154010/https://www.nmra.org/sites/default/files/s-9.3.2_2012_12_10.pdf)
  is the last one we found.

The NMRA standards page currently links "S-9.3.2 DCC Basic Decoder
Transmission" to a file whose cover reads "Bi-Directional
Communication, Jan 3, 2021, S-9.3.2 Draft". That draft has not been
approved.

> **Commentary (2026-10-18):** check the cover of any S-9.3.2 file
> you download. The name on the NMRA index and the document behind
> it do not match, and a draft is easily mistaken for the standard.

### The 2026 draft rewrite, open for comment

The NMRA is rewriting S-9.3.2 to bring it into line with RCN-217,
and the draft is public.

- **Title:** "Bi-Directional Communications", S-9.3.2 DRAFT, by
  John D Forsyth and Brian Kopp, dated 11 September 2026, 69 pages.
- **Status:** first posted 10 April 2026; comments close on
  **8 November 2026**. Listed on the NMRA's
  [documents under revision](https://www.nmra.org/documents-under-revision)
  page.
- **Get it:**
  [s-9-3-2_bi-directional_communications_draft.pdf](https://www.nmra.org/sites/default/files/standards/sandrp/Draft/DCC/s-9-3-2_bi-directional_communications_draft.pdf)

Its history section says the rewrite is "consistent with the current
version of RCN-217", but does not name an RCN-217 edition.

> **Commentary (2026-10-18):** we compared the draft with RCN-217's
> own history table. It includes the July 2024 changes but none of
> the 2025 ones, so it follows roughly the 21.07.2024 edition rather
> than the current 24.11.2025 one. One example you can check in
> both documents: the draft has decoders log on at programming
> address 0003 (its CV 28 bit 4), where the current RCN-217 uses
> address 0000. Until it is approved and catches up, RCN-217 remains
> the document to work from.

## The name and the patents

"RailCom" is a trademark, and the technique was once patented. This
section records what the public registers and the standards
themselves say, checked on 2026-10-18.

### The trademark

Lenz Elektronik GmbH of Giessen devised RailCom and registered the
name. RCN-217 §1.1 says so and cites two registrations: German mark
301 16 303, class 9 "electronic controls", and US registration
2,746,080. The registers checked on 2026-10-18 show:

| Register | Mark | Status |
| -------- | ---- | ------ |
| Germany (DPMA) 301 16 303 | RAILCOM, class 9, filed 12 March 2001 | Registered |
| Benelux (BOIP) 993544 | RailCom, classes 9, 37 and 42, filed 17 July 2001 | Registered |
| United States (USPTO) 2,746,080 | RAILCOM, class 9 | Cancelled 7 March 2014, no ten-year declaration of use filed |

So the US registration that RCN-217 still cites has lapsed, while
the German and Benelux registrations are in force. The German and
Benelux entries were read in
[TMview](https://www.tmdn.org/tmview/#/tmview/results?page=1&pageSize=30&criteria=C&basicSearch=railcom),
the EUIPO's search across national registers; the US entry in
[Justia's copy](https://trademarks.justia.com/763/03/railcom-76303014.html)
of the USPTO record. TMview's result list does not show the owner,
so the owner of the two live marks is taken from RCN-217 and from
the notices that manufacturers print, not read from the register
itself.

### The patents

Lenz held a European patent on the technique,
[EP 1 380 326 B1](https://patents.google.com/patent/EP1380326B1/en),
filed 9 July 2002 and granted in 2005, and two US patents,
6,494,410 and 6,853,312. A third US patent, 6,539,292 B1, was held
by Stan Ames. The NMRA's 2012 S-9.3.2 (linked above) says these were licensed
to the NMRA, which granted a no-cost sub-licence for personal
non-commercial use and for commercial products it had certified.

RCN-217 §1.1 now says (our translation from the German): "The
European patent 1 380 326 B1 has been revoked. RailCom is therefore
freely usable, subject to the trademarks." The three US patents
have passed their twenty-year terms. EP 1 380 326 B1 would in any
case have expired on 9 July 2022.

### What the standard says about use

Beyond the sentence quoted above, RCN-217 §1.1 adds one limit: the
specification applies only to RailCom within the DCC data format,
and use within other data formats is not permitted.

> **Commentary (2026-10-18):** this section records what the
> documents and registers said on the date given. It is not legal
> advice.
