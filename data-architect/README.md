# Data Architecture Case Study:

## Overview

The goal of this exercise is to get to know you better, and to get a sense of
the technical and analytical approaches you might apply in your work here at
Parsley Health. There are no right or wrong answers.

## Prompt

Provide a short report describing a data architecture and strategy to support
a medium-scale, multi-location medical practice providing regular care to
10,000 patients.

Overall the practice is looking for near-real-time insights into the following:

* Reasons / chief complaints addessed in patient visits
* Correlations between individual patient chief complaints over time
* Patient visit wait times
* Patient messaging wait times
* Average visit lengths, correlations with chief complaints
* Patient satisfaction with care
* Average revenue per patient

Additionally, the practice is interested in data applications that provide
decision support to care givers at the time of the visit:

* Drug interactions in the current visit and across visits
* Automated reminders to follow up on previously noted conditions and
  interventions
* Prompts and suggestions for care from automated analysis of all available
  patient data with application of a broader collection / corpus of health data

You are asked to consider the following constraints and concerns:

* You will interface with an existing EHR which exposes an HL7 interface.
* The EHR is technologically challenged, and requires custom connectors for
  receiving some lab reports and outside records.
* HIPAA-compliant security and storage is required.
* Patient ingest forms are gathered electronically.

Please identify any data gaps that would prevent the practice from
accomplishing their goals, and suggest collection methods, systems or tools
for acquiring that information.

Additionally, the practice would appreciate any suggestions and plans for
useful insights they have not yet considered.

## Output

Please provide a short, one-to-two page brief and systems architecture diagram
to support.
