Patient Ingest Form Application
===============================

### Overview

In this task you'll be creating and deploying a full, simple, client-side, single-page application. Every aspect to the task is a part of the test, and the goal is to see how well you realize the sort of project you might be expected to work on here at Parsley Health. If you have any questions don't hesitate to email me at [michael@parsleyhealth.com](michael@parsleyhealth.com).

### Requirements

I would like you to create a **multi-step** or **multi-screen** patient ingest form that gathers the following data. Please use your best judgement on what sorts of questions to ask.  

* **Demographic data**: name, email, address, birthdate, etc.
* **Medical history information**: family history, medications, diseases, allergies.
* **Acceptance of a contract** (lorem ipsum text is fine).
* Several steps should be used to organize the information, with no full page reload between them.
* The current step and its place in the series of steps, should be indicated.

Then, finishing up:  

* Present a **wrap-up or summary screen** prior to submission where you print the collected data, and which allows the patient to go back and edit if any information was entered incorrectly.
* Simulate submitting the data to a REST API endpoint by **printing the payload to the console**.
* **Reset the form** and return to me to the initial state.

### Evaluation

Generally, I’ll be evaluating your work along the following lines:

* Cleanliness and clarity of code!
* Project organization
* Management of data internally, and state handling
* Consideration of pertinent questions and collected data
* General polish of execution
* Consideration of UX — not that you have to go deep on design, any style framework is fine
* Tools used to complete the task: JS frameworks, build tools, etc

### Delivery of project

* Please place your finished source code on GitHub and [email me](michael@parsleyhealth.com) a link to the repository.
* Please host your finished application somewhere and email me the url. (GitHub Pages, Heroku, S3 bucket)

> If for some reason you would rather not have your code or application out in the open, please send me a zip file of the source code and instructions on to launch and view the finished application.

### Hints

* Focus on what I’m evaluating you on. While showing me what you can do with a web service framework might be impressive, the bulk of this task is about front-end user experience and process, so get that done first.
* Be efficient! Please don’t reinvent the wheel, use generators and other tools when they speed up your process and get you to your end goal faster.
* I think React, Redux and maybe redux-form might be useful here, but any comprehensive, robust solution is good. Please no jQuery!
