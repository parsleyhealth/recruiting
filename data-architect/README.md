# Data Architecture Case Study

## Overview

The goal of this exercise is to get to know you better, and to get a sense of
the technical and analytical approaches you might apply in your work here at
Parsley Health. There are no right or wrong answers.

## Prompt

Provide a short report describing a data architecture and strategy to support
a medium-scale, multi-location medical practice providing regular care to
10,000 patients. The practice would like to know what systems they need to
build, contract or otherwise enlist toward their desired goals. Likewise, they
would like a basic understanding of how data will move throughout the system,
and want assurance that adequate safeguards are in place to satisfy privacy
concerns.

Overall the practice is looking for near-real-time insights into the following:

* Reasons / chief complaints addessed in patient visits
* Correlations between individual patient chief complaints over time
* Patient visit wait times
* Patient messaging wait times
* Average visit lengths
* Correlations between visit lengths and chief complaints
* Patient satisfaction with messaging and visits
* Average revenue per patient

Additionally, the practice is interested in data applications that provide
decision support to care givers at the time of the visit:

* Drug interactions in the current visit and across visits
* Automated reminders to follow up on previously noted conditions and
  interventions
* Prompts and suggestions for care from automated analysis of all available
  patient data with application of a broader collection / corpus of health data

You are asked to consider the following constraints and existing resources:

* You will interface with an existing EHR which exposes a JSON API. This
  provides the patient chart, containing:
  * Structured encounter data with freeform SOAP notes and date stamps
  * Structured ingest form data
  * Scheduled visits
* Patient ingest forms are gathered electronically.
* The EHR supports the display of outside resources and will provide a patient
  identifier and a viewer / provider identifier.
* Patient electronic messaging is handled via a third-party service, with a
  common patient identifier.
* Billing is handled via a third-party service, with a common patient
  identifier.
* HIPAA-compliant security and storage are required.

Please identify any data gaps that would prevent the practice from
accomplishing their goals, and suggest collection methods, systems or tools
for acquiring that information.

Additionally, the practice would appreciate any suggestions and plans for
useful insights they have not yet considered.

## Output

Please provide a short, one-to-two page brief and systems architecture diagram
to support.
