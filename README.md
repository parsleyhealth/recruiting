Patient Ingest Form Application
===============================

### Overview

In this task you'll be creating and deploying a full, simple, client-side, single-page application. The goal is to see how well you realize the sort of project you might be expected to work on here at Parsley Health. If you have any questions don't hesitate to email me at michael@parsleyhealth.com.

### Time limits

Please spend **no more than 3-hours** on this test. 

Please turn in your results within **72-hours** of the prompt being given*. 

> *Extensions are available, just ask

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
* **Reset the form** and return the user to the initial state.

### Evaluation & priorities

Within your brief **3 hour time limit** I hope you'll prioritize the following, in this order. Consider this an iterative process: get it working on sound principles first, then start adding layers of refinement as time allows.

1. Planning: tools to use, implementation strategy, very basic UX concerns like what to ask for where
2. Project organization
3. Cleanliness and clarity of code!
4. Making it work! (your results might be crude, but don't worry)
5. Management of data internally, for example, state handling
6. Consideration of pertinent questions and collected data
7. General polish of execution
8. Consideration of UX — not that you have to go deep on design, any style framework is fine


### Delivery of project

* Please place your finished source code on GitHub
* Please host your finished application somewhere (GitHub Pages, Heroku, S3 bucket)
* Email the repository URL and application URL

> If for some reason you would rather not have your code or application out in the open, please send me a zip file of the source code and instructions on to launch and view the finished application.

### Wrap up

When you've finished the test let me know by email: michael@parsleyhealth.com

We can then schedule a short wrap up call to go over your results and the thinking you applied to this project.

### Hints

* Focus on what I’m evaluating you on. While showing me what you can do with a web service framework might be impressive, the bulk of this task is about front-end user experience and process, so stick to that.
* Be efficient! Please don’t reinvent the wheel, use boilerplates, generators and other tools when they speed up your process and get you to your end goal faster.
* I think React, Redux and maybe redux-form might be useful here, but any comprehensive, robust solution is good. 
* Please no jQuery (without a great reason)
