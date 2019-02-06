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
    - [Client Side](#client-side)
    - [Server Side](#server-side)
    - [Database](#database)
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

## Tools & Methodologies
### Trello
We decided to use Trello as Project Management Tool. The main approach was to create several lists including:

* Deliverables
* To-do
* To-do Today
* Doing
* Done
* MVP
* Nice to have

Then we assigned cards to each of this lists and relocate the cards as the project advanced. We also took advantage of the calendar tool in order to keep track of important deadlines.

![](docs/images/trello-screenshot.png)


### Figma/Balsimiq

### Source Control
#### Github and Gitflow
Provide an overview and description of your source control process.
* GitHub Organisations
* GitFlow: Merge Commissions
* Branches, etc.
1.  Employ and utilise proper source control methodology

We decided to create a GitHub Organisation with the objective of having all members as owners of the repository. The main advantage of this approach is that we can optimise production processes as under this setup any team member is able to code review and merge pull requests. Nevertheless, we decided also that if a team member creates a pull request she/he will not merge the pull request herself/himself but instead another team member will be responsible of code review and potentially merging that branch. 

As an organisation we also agreed to work in well named branches, and always push the branch instead of master in order to raise well documented pull requests. 

### Agile Methodologies
We implemented several agile methodologies during the planning and execution of the project. As an organisation we decided to distribute the responsibilities of a scrum master among all the team members.

We also performed daily standups where we discussed in a brief way how all the different parts of the project were developing and how the project as whole was being implemented.

From the beginning we focused in working software and customer collaboration. We aimed to have a conversation with the customer as the project was developing. For us customer satisfaction was the main priority and we aimed to adapt accordingly to the customer requirements.

Sustainable development and simplicity were also very important for us. During the planning process we agreed in setting realistic goals with a good buffer in case of unexpected issues. Likewise, we agreed on pursuing the satisfaction of our customer requirements in the simplest way possible.

Another important technique we implemented in the initial stages of the project was pair programming. This was very helpful to get all the team members in the same page in terms of database design and application flow. 

### Code Review
As mention before we decided that team members were not allowed to merge their own pull request, but instead another team member is responsible for code review and merging if appropriate. 

This approach worked really well as it allowed us to pick up issues early in the development process. Ocationally we had conflicts but we were able to resolve them relatively quickly. The conflict solving process was as follows:

1. Fetch the branch to be merged locally. 
2. Pull the latest version of master locally.
3. Merge master to the branch to be merged. 
4. Code review an solve conflicts as required. 
5. Push the branch now we the conflicts solved. 

### Deployment
We decided to use a distributed deployment approach for this project with the following set up:

#### Client Side
The client side of the application was deployed using Netlify continuous deployment. Netlify GUI was utilized to manage environmental variables and build processes. 

#### Server Side
The server side of the application was deployed in now.sh, and a now.json file was used to manage environment variables and build processes. 

#### Database
The database of the application was stored in a mLab sandbox database.    

### Testing
Testing was performed often during the development of the application. Testing techniques included the following:

* Console logging variables both in the back and front end in order to check that the values are as expected. 
* Test new features in new git branches and check if they perform as expected in localhost before deploying. 
* Using Postman to confirm the server routes are receiving and sending the right information.
* Testing the production version of the application by performing a diverse range of processes live. 

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