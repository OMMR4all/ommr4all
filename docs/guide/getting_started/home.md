---
title: Transcribe with OMMR4all
summary: OMMR4all
authors:
    - Alexander Hartelt
date: 2025-09-27
---

***OMMR4all*** is a web application offering a workspace to manage the various steps of transcription medieval music manuscripts. These steps can involve manual or automatic processes and be applied to printed documents or handwritten ones. The application uses multiple algorithms, neural networks and post-processing steps. The project was developed at the chair of artificial intelligence and applied science of the University of Würzburg in the context of the Corpus Monodicum Project ([Corpus Monodicum](https://corpus-monodicum.de/)).

The goal of this documentation is to help interested users learning how to use the software.

---

### What is OMMR4all?

**OMMR4all** is a web-based tool for Optical Medieval Music Recognition. It helps you transcribe and annotate medieval music manuscripts, offering:

- Automatic detection of musical elements
- Manual correction and annotation
- Visual organization of scanned sources

---

### Key Goals and Use Cases

OMMR4all is designed to:

- Support musicologists in the digitization of medieval chant
- Provide a **semi-automatic pipeline** — with manual corrections possible at every stage

---


## Workflow ##
Since OMMR4all is a highly complex tool, we have organized its documentation into distinct sections.

1. [Login](../getting_started/login.md) into OMMR4all: …
2. Upload of pages of a manuscript ([creation](../getting_started/manuscript_creation.md) and [image import](../getting_started/importing_images.md))
3. If working in a team, [permissions](../getting_started/permissions.md) for team members can be set
4. Automatic transcription of music pages, if a suitable model is available ([workflow](../workflow/workflow.md) overview)
5. Manual post-correction of the transcription with an [overlay editor](../workflow/editor.md)
    a. Without automatic transcription, the whole page must be edited, and [training](../training.md) new models from several annotated pages is supported
6. [Export Data](../output/output.md) transcription in various formats.


## FAQ ##

This [section](faq.md) is continuously expanded by answers to frequently asked questions.
