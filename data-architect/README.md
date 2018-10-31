# Data Architecture Case Study

## Overview

The goal of this exercise is to get to know you better, and to get a sense of
the technical and analytical approaches you might apply in your work here at
Parsley Health. There are no right or wrong answers.

## Prompt

Provide a short report describing a data architecture and strategy to support a
medium-scale, multi-location medical practice providing regular care to 100,000
patients. The practice would like to know what systems they need to build,
contract or otherwise enlist toward their desired goals. Likewise, they would
like a basic understanding of how data will move throughout the system, and want
assurance that adequate safeguards are in place to satisfy privacy concerns.

### Insights

Overall the practice is looking for near-real-time insights into the following:

* Reasons / chief complaints addessed in patient visits
* Correlations between individual patient chief complaints over time
* Correlations between visit lengths and chief complaints
* Information about outcomes of visits and treatments
* Patient visit wait times
* Patient messaging wait times
* Frequency of messaging following a visit
* Average visit lengths
* Patient satisfaction with messaging and visits
* Average revenue per patient

Additionally, the practice is interested in data applications that provide
decision support to care-givers, based on the particulars of the patient's
entire medical history and working with a broader collection / corpus of health
data.

### Decision support

At the time of the visit they would like to know:

* Drug interactions in the current visit and across visits
* Suggestions for treament plans
* Alerts about previously noted conditions and interventions to follow up on

And between visits:

* Reminders to care-givers to follow up on previously noted conditions and
  interventions (remember, these could include PHI)
* Email reminders to patients to schedule follow up visits

### Constraints

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
  common patient identifier. The messaging system supports provides basic
  reporting functionality.
  
* Billing is handled via a third-party service, with a common patient
  identifier.
  
* A CRM is in place which sends automated emails requesting feedback on visits
  and messaging interactions.
  
* HIPAA-compliant security and storage are required.

### The Unknown Unknown

Please identify any data gaps that would prevent the practice from accomplishing
their goals, and suggest collection methods, systems or tools for acquiring that
information.

Additionally, the practice would appreciate any suggestions for useful insights
or applications they have not yet considered.

## Output

Please provide a short brief, no more than 3 pages, and a systems architecture
diagram to support.

## Submissions

Please send your final results to
[michael@parsleyhealth.com](mailto:michael@parsleyhealth.com). We will schedule
a short call to review your plan.

## Questions

If anything isn't clear please don't hesitate to ask!
