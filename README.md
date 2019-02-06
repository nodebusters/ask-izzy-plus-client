# Ask Izzy Plus <!-- omit in toc -->
A self-service application for service providers listed on Ask Izzy to update their contact details with our client Infoxchange. Built in the JavaScript MERN stack for our final Coder Academy group project.

## Tagline/Logo <!-- omit in toc --> 
--INSERT ASK IZZY PLUS TAGLINE/LOGO--
https://github.com/ask-izzy/ask-izzy

### Deployed Link <!-- omit in toc --> 
* Client: https://ask-izzy-plus.netlify.com
* Server: https://ask-izzy.now.sh/

### GitHub Link <!-- omit in toc --> 
* Client: https://github.com/nodebusters/ask-izzy-plus-client
* Server: https://github.com/nodebusters/ask-izzy-plus-server

## Summary <!-- omit in toc -->
Brief summary description of functionality and background for Ask Izzy Plus application/Coder Academy project.

## Contributors <!-- omit in toc --> 
|[![Diego Rodriguez](/docs/contributors/contributors-diegorodriguez2018-70x70.jpg)](https://github.com/DiegoRodriguez2018)| [![Aitzu Hu](/docs/contributors/contributors-Aitzu-70x70.jpg)](https://github.com/Aitzu) | [![Linda Lai](/docs/contributors/contributors-linda-lai-70x70.jpg)](https://github.com/linda-lai)| [![James Hastings](/docs/contributors/contributors-omegadefender-70x70.jpg)](https://github.com/omegadefender) 
|-----------|-----------|-------------| ------------- |
| Diego Rodriguez | Aitzu Hu | Linda Lai | James Hastings |

## Contents <!-- omit in toc -->
- [About Ask Izzy Plus](#about-ask-izzy-plus)
  - [Project Background](#project-background)
  - [Functionality and Features](#functionality-and-features)
- [Screenshots (Live Application)](#screenshots-live-application)
- [The Brief](#the-brief)
  - [The Client](#the-client)
  - [The Problem (Problem Definition)](#the-problem-problem-definition)
  - [The Solution (Purpose)](#the-solution-purpose)
- [Application Design](#application-design)
  - [Design Process](#design-process)
  - [User Stories](#user-stories)
  - [Workflow Diagram: User Journeys](#workflow-diagram-user-journeys)
  - [Wireframes](#wireframes)
  - [Database Schema](#database-schema)
  - [Data Flow Diagram](#data-flow-diagram)
  - [OO Design Documentation](#oo-design-documentation)
- [Project Management & Planning](#project-management--planning)
  - [Project Plan and Timeline](#project-plan-and-timeline)
  - [Client Communications](#client-communications)
  - [Task Management (Trello)](#task-management-trello)
- [Tools & Methodologies](#tools--methodologies)
  - [Trello](#trello)
  - [Figma/Balsimiq](#figmabalsimiq)
  - [Source Control](#source-control)
    - [Github and Gitflow](#github-and-gitflow)
  - [Agile Methodologies](#agile-methodologies)
  - [Code Review](#code-review)
  - [Deployment](#deployment)
  - [Testing](#testing)
- [Short Answers: Post-Review](#short-answers-post-review)
  - [Q1: What are the most important aspects of quality software?](#q1-what-are-the-most-important-aspects-of-quality-software)
  - [Q2: What libraries are being used in the app and why?](#q2-what-libraries-are-being-used-in-the-app-and-why)
  - [Q3: A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?](#q3-a-team-is-about-to-engage-in-a-project-developing-a-website-for-a-small-business-what-knowledge-and-skills-would-they-need-in-order-to-develop-the-project)
  - [Q4: Within your own project what knowledge or skills were required to complete your project, and overcome challenges?](#q4-within-your-own-project-what-knowledge-or-skills-were-required-to-complete-your-project-and-overcome-challenges)
  - [Q5: Evaluate how effective your knowledge and skills were this project, using examples, and suggest changes or improvements for future projects of a similar nature?](#q5-evaluate-how-effective-your-knowledge-and-skills-were-this-project-using-examples-and-suggest-changes-or-improvements-for-future-projects-of-a-similar-nature)
- [Future Development](#future-development)
  - [Extensions](#extensions)
  - [Handover](#handover)
  - [Client Survey/Questionnaire](#client-surveyquestionnaire)
  - [Running Ask Izzy+ (Developers)](#running-ask-izzy-developers)
- [Presentation](#presentation)

<!-- TODO: LINDA -->
## About Ask Izzy Plus
### Project Background
**Description**
Ask Izzy Plus is a self-service web application built for our client Infoxchange. Service providers listed on Ask Izzy can log in and update contact 

A full stack developer needs to be able to demonstrate they can build a complete application from design through to deployment for a commercial client (using appropriate tools and methodologies).

* You are to design, build, deploy and present a web application (App) built for a real world customer.
* Find a business or organisation (preferably near your campus) to build an App for.
* Meet with the business owner or organisation manager to find out what challenges they face. Find a problem that you can solve with an App and present your ideas to the client.
* The project must be completed in the assigned groups.

**Technologies**
Demonstrate your full stack development skills by implementing the following requirements, At a minimum use the following technologies:
* Mongo / Mongoose
* Express
* React.js
* Node.js

<!-- TODO: LINDA -->
### Functionality and Features
The goal of the Ask Izzy Plus project is to explore the needs of staff working in organisations that use Ask Izzy to find out what additional functionality would make it more useful to them. For example, this may include an Ask Izzy Dashboard that organisations can log in to, where they can:

**MVP**
- Editing or removing your site or service
- If you need to make changes to your service details, or remove your service from the Ask Izzy homelessness website and Infoxchange Service Seeker national directory, please click 'Update/remove service' on the individual service listing and provide all of the requested information. The changes you request will be actioned within seven (7) calendar days from submission.

**Extensions**
-	The ability to update their details and information on Ask Izzy easily.  
-	Create lists of ‘favourite’ services that they could share easily with their clients by hardcopy, SMS or email.

**Prototype**

As a prototype MVP it would be great to build out the Service Provider ability to:
* Login/Logout
* Create/Update/Amend their details

<!-- TODO: LINDA -->
## Screenshots (Live Application)
--INSERT SCREENSHOTS---

<!-- TODO: LINDA -->
## The Brief
### The Client
**Infoxchange**

Infoxchange is an organisation that develops and supports innovative software for a wide range of purposes to help people who face disadvantage and the organisations that support them.

**Ask Izzy**

Infoxchange's mobile website Ask Izzy connects people at risk of or experiencing homelessness or disadvantage to over 360,000 services across Australia, including housing, a meal, support and counselling, and much more.
* Ask Izzy is a centralised directory that provides relevant, up to date information about services available to people who are experiencing or are at risk of homelessness and the people who support them.
* Ask Izzy is a comprehensive and easy to use resource for mobile, tablet and desktop. It’s a place for you and the people you support to find out about location based housing options, where to access meals, material aid and health services. There are also links to local services including: legal, financial, alcohol and other drugs, family violence and mental health.
* With more than 1.3 million searches on the site since it was first launched -  Ask Izzy connects close to 1000 people a day to help nearby.
* Help us keep Ask Izzy relevant. Up-to-date service information is vital. Organisations across the sector can contribute to this community led initiative to help us make it better. Your organisation can even add information about your temporary services to the program and events section.


Ask Izzy is an open source application and can be located on GitHub https://github.com/ask-izzy/ask-izzy.

<!-- TODO: LINDA -->
### The Problem (Problem Definition)
**Need/Problem**
* Service providers need to be able to update their service
details
* Identified that service providers often rely on their person network.
* The process needs to be simplified for services providers to update their information
* Accuracy of services available are important to clients using these services

**Business Context**
* Infoxchange policy requires that direct contact be made with service providers prior to adding or updating their records. Such contact ensures compliance with privacy laws, confirms that changes were submitted by the service provider’s office and verifies the validity, accuracy and completeness of the information.
* Online updates submitted by service providers require procedures to ensure validity and accuracy. Updates submitted online are stored in a holding bay until they can be verified with the provider, checked for consistency and correct formatting, edited if necessary, and finally included in the directory.
* Experience confirms that self-authoring approaches, even those that are automated, are insufficient to maintain community service directories at an acceptable standard.
* Responses to auto-emails have increased as agencies become accustomed to the
procedure, but after a number of years, they still have a return rate of only forty to sixty per cent. Telephone contact has clearly proved itself the most effective updating method.

Infoxchange employs several updating methods:
* Scheduled bulk emails out to service listings
* Provision of self-response opportunities – via online forms
* Mail-outs
* Telephone contact
* Fax-backs.

**Solution/Outcome**
* Service providers want more control over their available services
* Accommodation providers want to update their availability/vacancy and be able to do this seamlessly
* Service providers would like to be able to save favourites lists

<!-- TODO: LINDA -->
### The Solution (Purpose)
* MVP
* Traffic light system (for Vacancies)
* Login to update details
* Further details of the type of housing on Ask Izzy
* Ask Izzy tracks appointments for clients
* Alert sent to Ask Izzy if a SP update their details

## Application Design
Demonstrate your ability to break down the problem and design a solution.
- Compose a summary of your application including problem definition and solution
- Review the conceptual design with the client and edit based on their feedback
- User stories for the whole application
- A workflow diagram of the user journey/s
- Wireframes for all main pages of your app
- Entity Relationship Diagram (ERD)
- Project plan and effort estimation
- Data Flow Diagram
- OO design documentation

<!-- TODO: AITZU -->
### Design Process
- Compose a summary of your application including problem definition and solution
- Review the conceptual design with the client and edit based on their feedback
<!-- TODO: AITZU -->
### User Stories
- Trello User Stories/Personas: User stories for the whole application
- Provide UX/UI design documentation(user stories) that adequately show Agile methodology implementation.
<!-- TODO: AITZU -->
### Workflow Diagram: User Journeys
-- INSERT DIAGRAM --
- A workflow diagram of the user journey/s
### Wireframes
-- INSERT WIREFRAMES --
* Figma, Balsamiq
* Provide UX/UI design documentation(wireframes) that adequately show Agile methodology implementation.
### Database Schema
- MONGOOSE SCHEMA
- CHALLENGE: COMPLEXITY, TRANSLATING TO DOCUMENT DATABASE
### Data Flow Diagram
-- INSERT DATAFLOW DIAGRAM --
<!-- FIXME: Checking with Matt/Harrison if this is required -->
### OO Design Documentation
??? CONFIRM WHAT THIS REQUIREMENT IS ???
OO Design (Provides Object Oriented design diagrams(UML or alternative) that clearly identify OO class attributes, methods, relationships.)

<!-- TODO: LINDA -->
## Project Management & Planning
Demonstrate your ability to satisfy your client with the quality of your work and high level of service.
**Client**
- Record interactions with your client in a diary format
- Plan information gathering activities to determine project requirements, constraints and risks

**Project Management**
- Develop project charter, including preliminary statement of project scope and obtain sign-off
- Prepare project work breakdown and schedule
- Allocate roles and responsibilities to team members, based on project solution requirements
- Monitor each other’s assigned work
- Reassess ongoing project scope changes, risks and issues

**Handover**
- Manage system testing and hand over activities. Prepare maintenance or support plans for client
- Obtain final project sign-off
- As a team, conduct post project review
- Create a questionnaire for the client to ascertain the satisfaction with your products and services
### Project Plan and Timeline
- Project plan and effort estimation
1.   Employ and utilise project management methodology
2.   Employ and utilise task delegation methodology
### Client Communications
When approaching your client, be upfront about this being a project you are doing as part of your Diploma.
There is to be no expectations on you, the students, to deploy the application for use of the client. Make sure the client is aware of this and that it is agreed upon.
There is to be no confidentiality agreement to be entered into.
### Task Management (Trello)
- Project plan and effort estimation
- Select and follow a commonly used planning methodology, such as Kanban, Trello, Jira, or Asana.

<!-- TODO: DIEGO -->
## Tools & Methodologies
Demonstrate your project management skills,
- Trello or similar project management tool to be used for Kanban process to track progress of build
- GitHub - Demonstrate use of frequent commits, feature branches (based on user stories), pull requests and merges
- Use Agile development methodologies
- Code review - Demonstrate that you have had your code reviewed by other students and that you have provided a code review for others
- Show evidence of client communication, e.g. meeting minutes, emails, or other communication tools
<!-- TODO: DIEGO -->
### Trello
<!-- TODO: LINDA -->
### Figma/Balsimiq
<!-- TODO: DIEGO -->
### Source Control
#### Github and Gitflow
Provide an overview and description of your source control process.
* GitHub Organisations
* GitFlow: Merge Commissions
* Branches, etc.
1.  Employ and utilise proper source control methodology

### Agile Methodologies
<!-- TODO: DIEGO -->
### Code Review
* Do not merge if you raised the PR - trust, but verify.
* Generally worked OK, largely stuck to, able to resolve conflicts relatively quickly.
1.  Demonstrate code flow control
2.  Demonstrate use of functions
3.  Apply Object oriented principles/patterns

<!-- TODO: DIEGO -->
### Deployment
<!-- USER INTERFACE -->
32. Deployment
    
34. User interface

* Netlify
* mLab
* Now

<!-- TODO: DIEGO -->
### Testing
<!-- TESTING -->
34. Development testing

35. Production testing

36. Formal testing framework

## Short Answers: Post-Review
### Q1: What are the most important aspects of quality software?
* Functional Components
* Reusability
* Composition
* DRY - don't repeat yourself: Demonstrate DRY principles in all code.
* Separation of concerns: separate your program into modules that each deal with one particular focus, or concern.

### Q2: What libraries are being used in the app and why?
* Mongo / Mongoose
* Express
* React.js
* Node.js
* Passport

### Q3: A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?
* Business Context

### Q4: Within your own project what knowledge or skills were required to complete your project, and overcome challenges?
* Knowledge
* Skills
* Challenges

### Q5: Evaluate how effective your knowledge and skills were this project, using examples, and suggest changes or improvements for future projects of a similar nature?
* Effectiveness - Strengths and Weaknesses
* Learnings, Future Lessons

## Future Development
### Extensions
### Handover
### Client Survey/Questionnaire
<!-- TODO: DIEGO -->
### Running Ask Izzy+ (Developers)
Developer instructions for running Ask Izzy Plus can be found here: https://github.com/linda-lai/nodebusters-testing/blob/master/README_dev.md

## Presentation
You are to deliver a 7 minute presentation to the class.

The presentation should include,

* A walk-through of your live App website and its features
* A walk-through of your design process and decisions
* A review of your development/build process including challenges, ethical issues, favourite parts, etc
* Answer questions from the audience
* Use this presentation as an opportunity to pitch your ideas to 'investors'.