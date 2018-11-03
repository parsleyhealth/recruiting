# Systems Design Presentation

## Overview

The goal of this exercise is to get to know you better, and to get a sense of
the technical and analytical approaches you might apply in your work here at
Parsley Health. There are no right or wrong answers.

## Challenge

Create a short (30 minutes) presentation describing a systems design to support
a new scheduling application for a large, multi-location medical practice
providing regular care to 100,000 patients. This system will replace a current
scheduling tool that is dated, unreliable, and limited in features.

## User Stories

This scheduling application is super cool. It will need to support a number of
user stories.

- A patient should be able to view and filter available appointment options
  relevant to their provider group and location.

- A patient to should be able to create, reschedule and cancel appointments.

- A patient should receive automated reminder messages multiple times before
  their appointment.

- A patient should receive automatically escalated reminder messages depending
  on their failure to view previous reminders.

- A patient should receive automated follow up messages at different intervals
  depending upon the nature of the visit, inferred from the well-structured
  visit notes (the scheduler is responsible for this logic).

- A patient should receive suggestions for new appointments based on provider
  availability forecasting and their anticipated needs.

- A patient should be able to join a waitlist for an appointment type and period
  of time and receive an automated message when the appointment opens up.

- A patient should automatically receive a notification message to verify a
  contact method if multiple bounces are reported.

- Relevant practice staff should receive notification messages about new or
  altered appointments and their individual calendars should be kept up to date.

- Practice staff should see efficiently stacked calendars (few unfillable time
  slots), considering that there are many different standard appointment
  lengths, frequent cancelations and reschedules. It is possible this process
  will involve shifting existing appointments and require confirmation from the
  patient.

- Practice staff should receive **real-time** updates on major delays in seeing
  patients to correct the schedule ASAP.

- Practice staff should be able to report on possible gaps in availability based
  on long-term trend analysis in supply and demand.

- Practice staff should be able to report on the actual time doctors spend with
  patients, relative to the allotted or scheduled time.

## Key Terms

- **message** refers to notifications and other details sent via a mix of email,
  text and an internal secure messaging application, providing information
  appropriate to the medium.

## Concerns (What to worry about)

The application is expected to satisfy a number of high-level requirements,
including:

- Privacy (HIPAA Compliance)
- Reliability
- Data Integrity
- Responsiveness

## Not-Concerns (What not to worry about)

- Engineering resources
- Timelines
- Any sort of frontend (though user inputs are important)

## Existing Systems

The software and systems relevant to this project which are currently in place:

- Patients currently create accounts in a custom system, which populates the
  current scheduler and the EHR. There is a common patient ID in use through all
  systems.

- The EHR provides reliable timestamps, structured notes, and emits webhooks.
  Regrettably the data is all HL7-encoded. One of our brilliant engineers wrote
  a reliable-but-slow parser though.

- All patients are reliably checked-in for their appointments when they arrive
  through the existing scheduler. We will be replacing the checkin tool in this
  project.

- After check-in the next electronic touch point is when the provider starts
  their encounter note.

- All the providers use Google Calendar (HIPAA compliant) for their personal
  calendars.

- Though it is not perfect, there is readily available data on past appointment
  requests, checkins, and wait times for booking appointments.

## Key Deliverables

Anything not specifically mentioned above is something you should consider as
necessary to plan and design as a part of this project. While you will not be
expected to go into great depth on any particularlity of this stack, we would
like to presentation to address:

- Major systems (databases, pipelines, application logic, etc...) to be built in
  support of this project.

- Data flows and key state changes throughout this system necessary to
  accomplish all of the desired automated actions. E.g., when a patient requests
  an appointment, receives a message and views that message what happens where?

- Key systems needed to provide analyses which leverage exogenous data.

## Output

Please create a 30 minute presentation, with diagrams as needed, to illustrate
and explain what we need to build. Given the complexity of the application and
limited amount of time we understand you might not hit on every feature and
detail, but be reasonably prepared to go into more depth on certain aspects
during the Q&A.

## Submissions

Please send your presentation at any time prior to the onsite to
[michael@parsleyhealth.com](mailto:michael@parsleyhealth.com).

## Questions

If anything isn't clear please don't hesitate to ask!
