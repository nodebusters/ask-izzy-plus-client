# Ask Izzy Plus <!-- omit in toc -->
Ask Izzy Plus is self-service application for service providers listed on Ask Izzy to update their contact details with our client Infoxchange. Built in the JavaScript MERN stack for our final Coder Academy group project.

[![Ask Izzy Plus Logo](docs/images/ask-izzy-plus-logo.png)](https://github.com/nodebusters/)

## Ask Izzy Plus Links
### Deployed <!-- omit in toc --> 
* Client: https://ask-izzy-plus.netlify.com
* Server: https://ask-izzy.now.sh/

### GitHub Repositories <!-- omit in toc --> 
* Client: https://github.com/nodebusters/ask-izzy-plus-client
* Server: https://github.com/nodebusters/ask-izzy-plus-server

## Summary <!-- omit in toc -->
Ask Izzy Plus is a self-service application built to our client Infoxchange's specifications to allow service providers listed on Infoxchange's Ask Izzy platform to update organisation, site and service contact details. Built using JavaScript and the MERN stack (**M**ongoDB/Mongoose, **E**xpress, **R**eact and **N**ode.js) for our final Coder Academy project.

## Contributors <!-- omit in toc --> 

[![Nodebusters Logo](docs/images/nodebusters-logo-small.png)](https://github.com/nodebusters/)

|[![Diego Rodriguez](/docs/contributors/contributors-diegorodriguez2018-70x70.jpg)](https://github.com/DiegoRodriguez2018)| [![Aitzu Hu](/docs/contributors/contributors-Aitzu-70x70.jpg)](https://github.com/Aitzu) | [![Linda Lai](/docs/contributors/contributors-linda-lai-70x70.jpg)](https://github.com/linda-lai)| [![James Hastings](/docs/contributors/contributors-omegadefender-70x70.jpg)](https://github.com/omegadefender) 
|-----------|-----------|-------------| ------------- |
| Diego Rodriguez | Aitzu Hu | Linda Lai | James Hastings |

## Contents <!-- omit in toc -->
- [Ask Izzy Plus Links](#ask-izzy-plus-links)
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
Tasked with finding a real world customer to design, build, deploy and present a web application for our final Coder Academy project, Ask Izzy Plus is a self-service application built in JavaScript using the MERN stack to our client Infoxchange's requirements. 

The scope of our project for the MVP was to build a working prototype/proof of concept application for our client to pilot with a sample of Ask Izzy service providers as part of Infoxchange's broader Ask Izzy Plus project. To this end, simplifying the process for service providers to update their information with Infoxchange, and enabling service providers to update their details via a self-service application was a key pain point/wishlist identified by Infoxchange.

After finding our client, we met and worked with Ask Izzy's product manager to understand their current challenges and suggest ideas for a custom web application to solve a particular problem or area of this pain point. For the initial MVP, creating a prototype self-service application to allow service providers to update organisation, site and service information was the end goal. Integrating this functionality directly into the core Ask Izzy ecosystem was beyond the scope of this project so we created our own document database aligned as closely as possible to Infoxchange's data structure. From there, we worked to design and deploy a complete MVP over a three-week period written using the JavaScript MERN stack (**M**ongoDB/Mongoose, **E**xpress, **R**eact and **N**ode.js), and other node packages.

<!-- TODO: LINDA -->
### Functionality and Features
[Ask Izzy Plus](https://ask-izzy-plus.netlify.com) is a supplementary self-service application for service providers listed on Infoxchange's flagship [Ask Izzy](https://askizzy.org.au) platform, a mobile website that helps people who are homeless or at risk of becoming homeless to find essential services they need nearby and now.
* Using Ask Izzy Plus, service providers from Ask Izzy that have been whitelisted to use the platform by admins can login/logout and view contact details structured at multiple levels (organisation, site and services), in line with the data structure of the Infoxchange's Service Seeker database (which supports a number of directory services provided by Infoxchange, including Ask Izzy).
* From there, service providers can create, read, update and delete details for the organisation, sites and services they have been associated with. Users are associated with a particular organisation (which contain multiple sites and associated services with each site) by admins when onboarded that determine which organisation, sites and services they can view and edit.
* In turn, admin users (i.e. Nodebusters or Infoxchange) are responsible for pre-qualifying and onboarding service provider users onto Ask Izzy Plus first by whitelisting authorised email addresses and associating authorised users with a particular organisation. Admins can view all whitelisted users and whitelist a new user to an organisation in the admin dashboard.
* Our Ask Izzy Plus prototype uses Google OAuth to handle all user logins and manage authentication via a third-party provider.

<!-- TODO: LINDA -->
## Screenshots (Live Application)
<!-- FIXME: Add Final Screenshots -->
|[![](/docs/images/ask-izzy-plus-ui-desktop.png)]() | [![](/docs/images/ask-izzy-plus-ui-desktop.png)]() |
|-----------|-----------|
![](/docs/images/ask-izzy-plus-ui-mobile.png) | ![](/docs/images/ask-izzy-plus-ui-mobile.png)|

--- PLACEHOLDER: TO BE REPLACED WITH FINAL VERSION ---

<!-- TODO: LINDA -->
## The Brief
### The Client

**Infoxchange**

Our client, [Infoxchange](https://www.infoxchange.org/au/ask-izzy), is a not-for-profit social enterprise/non-government organisation that develops and supports software for a wide range of purposes to help support people who face disadvantage and the community organisations that support them. Infoxchange's Service Seeker database is Australia's largest up-to-date directory of health and welfare services, powering its sister directory Ask Izzy, the product we were supporting for our project brief.

**Ask Izzy**

Infoxchange's mobile website Ask Izzy is a centralised directory that provides a broad range of location and service-based search for people at risk of or experiencing homelessness or disadvantage to service providers across Australia. Users can find out about location based housing options, where to access meals, material aid and health services and local services including legal, financial, alcohol and other drugs, family violence and mental health. 

Designed mobile-first, and free and anonymous to use, Ask Izzy is compatible across desktop, tablet and mobile and connects close to 1000 people a day to help nearby, with its primary users being people who face disadvantage or risk, and staff working in organisations that support them.

Infoxchange's Ask Izzy is an open source application and can be located on GitHub: https://github.com/ask-izzy/ask-izzy.

<!-- TODO: LINDA -->
### The Problem (Problem Definition)
With over 360,000 service providers listed across Australia and close to 1,000 people a day connecting to Ask Izzy, accuracy of services available and up-to-date information is hugely important to clients using these services and vital to keeping Ask Izzy relevant. Infoxchange policy requires that direct contact be made with service providers prior to adding or updating records to comply with privacy laws, confirm that changes were submitted by the service provider's office and verify the validity, accuracy and completeness of the information.

Infoxchange employs several updating methods (scheduled bulk auto-emails, self-responses via online forms, mail-outs, telephone and fax-backs), with a week's turnaround on change requests and phone contact proving itself the most effective updating method. Currently, if service details need to be updated or removed from the Ask Izzy and Infoxchange Service Seeker directly, users must click on the Feedback/Report an Error link on the individual service listing and provide all of the requested information.

To this end, simplifying the process for service providers to update their information, and enabling service providers to access a self-service functionality served as the basis for our prototype MVP.

<!-- TODO: LINDA -->
### The Solution (Purpose)
With the goal of the exploring the needs of staff working in organisations that use Ask Izzy to find out what additional functionality would make it useful to them, the Ask Izzy Plus project team at Infoxchange identified some key insights and challenges through recent user research (one-on-one interviews with service providers working in the not for profit sector and with people who have experienced homelessness) that served the basis for our prototype MVP, namely:

> “Everyone wears different hats depending on the day.”

> “The System should be a funnel, instead it’s a colander.”

* Service providers need to be able to update their service details.
* The process needs to be simplified for service providers to update their information.
* Accuracy of services available are important to clients using these services.
* Service providers would like to be able to login to/logout of a user dashboard and update their details and information on Ask Izzy easily.

Our brief from Infoxchange entailed creating a working prototype/proof of concept web application called Ask Izzy Plus, a supplementary self-service application to Ask Izzy, to enable service providers to login/logout of a user dashboard, view, create, delete and update contact information about their organisation and its site and services, and send an alert to Infoxchange of any changes to improve current data maintenance methods.

Our prototype will be used by Infoxchange to pilot with a sample of Ask Izzy service providers as part of Infoxchange's broader Ask Izzy Plus project.

Possible extensions discussed with our client during this ideation stage for the Ask Izzy Plus self-service app prototype included:
* Create Favourites lists of services that could easily be shared with clients via hardcopy, SMS or email;
* Update vacancy details if they provide crisis/short-term accommodation and for vacancy status to be displayed on their service page.
* View feedback from clients on their services.
* Ability to get push updates or notifications (such as weather warnings that might impact clients/rough sleepers).

## Application Design
```
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
```

<!-- TODO: AITZU -->
### Design Process
- Compose a summary of your application including problem definition and solution
- Review the conceptual design with the client and edit based on their feedback
<!-- TODO: AITZU -->
### User Stories
- Trello User Stories/Personas: User stories for the whole application
- Provide UX/UI design documentation(user stories) that adequately show Agile methodology implementation.

![Trello User Stories](/docs/images/ask-izzy-plus-trello-user-stories.png)
- Trello User Stories/Personas: User stories for the whole application
- Provide UX/UI design documentation(user stories) that adequately show Agile methodology implementation.

<!-- TODO: AITZU -->
### Workflow Diagram: User Journeys
-- INSERT DIAGRAM --
- A workflow diagram of the user journey/s

<!-- TODO: AITZU/LINDA -->
### Wireframes
-- INSERT WIREFRAMES --
* Figma, Balsamiq
* Provide UX/UI design documentation(wireframes) that adequately show Agile methodology implementation.

<!-- TODO: LINDA -->
### Database Schema
- MONGOOSE SCHEMA
- CHALLENGE: COMPLEXITY, TRANSLATING TO DOCUMENT DATABASE

<!-- TODO: LINDA -->
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

<!-- TODO: LINDA -->
### Project Plan and Timeline
- Project plan and effort estimation
1.   Employ and utilise project management methodology
2.   Employ and utilise task delegation methodology

<!-- TODO: LINDA -->
### Client Communications
When approaching your client, be upfront about this being a project you are doing as part of your Diploma.
There is to be no expectations on you, the students, to deploy the application for use of the client. Make sure the client is aware of this and that it is agreed upon.
There is to be no confidentiality agreement to be entered into.

<!-- TODO: LINDA -->
### Task Management (Trello)
- Project plan and effort estimation
- Select and follow a commonly used planning methodology, such as Kanban, Trello, Jira, or Asana.

<!-- TODO: DIEGO -->
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

We decided to create a GitHub Organisation with the objective of having all members as owners of the repository. The main advantage of this approach is that we can optimise production processes as under this setup any team member is able to code review and merge pull requests. Nevertheless, we decided also that if a team member creates a pull request she/he will not merge the pull request herself/himself but instead another team member will be responsible of code review and potentially merging that branch. 

As an organisation we also agreed to work in well named branches, and always push the branch instead of master in order to raise well documented pull requests. 

<!-- TODO: DIEGO -->
### Agile Methodologies
We implemented several agile methodologies during the planning and execution of the project. As an organisation we decided to distribute the responsibilities of a scrum master among all the team members.

We also performed daily standups where we discussed in a brief way how all the different parts of the project were developing and how the project as whole was being implemented.

From the beginning we focused in working software and customer collaboration. We aimed to have a conversation with the customer as the project was developing. For us customer satisfaction was the main priority and we aimed to adapt accordingly to the customer requirements.

Sustainable development and simplicity were also very important for us. During the planning process we agreed in setting realistic goals with a good buffer in case of unexpected issues. Likewise, we agreed on pursuing the satisfaction of our customer requirements in the simplest way possible.

Another important technique we implemented in the initial stages of the project was pair programming. This was very helpful to get all the team members in the same page in terms of database design and application flow. 

<!-- TODO: DIEGO -->
### Code Review
As mention before we decided that team members were not allowed to merge their own pull request, but instead another team member is responsible for code review and merging if appropriate. 

This approach worked really well as it allowed us to pick up issues early in the development process. Ocationally we had conflicts but we were able to resolve them relatively quickly. The conflict solving process was as follows:

1. Fetch the branch to be merged locally. 
2. Pull the latest version of master locally.
3. Merge master to the branch to be merged. 
4. Code review an solve conflicts as required. 
5. Push the branch now we the conflicts solved. 

<!-- TODO: DIEGO -->
### Deployment
We decided to use a distributed deployment approach for this project with the following set up:

#### Client Side
The client side of the application was deployed using Netlify continuous deployment. Netlify GUI was utilized to manage environmental variables and build processes. 

#### Server Side
The server side of the application was deployed in now.sh, and a now.json file was used to manage environment variables and build processes. 

#### Database
The database of the application was stored in a mLab sandbox database.    

<!-- TODO: DIEGO -->
### Testing
Testing was performed often during the development of the application. Testing techniques included the following:

* Console logging variables both in the back and front end in order to check that the values are as expected. 
* Test new features in new git branches and check if they perform as expected in localhost before deploying. 
* Using Postman to confirm the server routes are receiving and sending the right information.
* Testing the production version of the application by performing a diverse range of processes live. 

## Short Answers: Post-Review
<!-- TODO: LINDA -->
### Q1: What are the most important aspects of quality software?
1. For the end-user (customer)
2. For the developer/business (client)

* Functional Components
* Reusability
* Composition
* DRY - don't repeat yourself: Demonstrate DRY principles in all code.
* Separation of concerns: separate your program into modules that each deal with one particular focus, or concern.

<!-- TODO: DIEGO -->
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
<!-- TODO: JAMES -->
### Extensions
<!-- TODO: JAMES -->
### Handover
### Client Survey/Questionnaire
<!-- TODO: DIEGO -->
### Running Ask Izzy+ (Developers)
Developer instructions for running Ask Izzy Plus can be found here: https://github.com/nodebusters/ask-izzy-plus-client/blob/master/README_dev.md

<!-- TODO: GROUP -->
## Presentation
You are to deliver a 7 minute presentation to the class.

The presentation should include,

* A walk-through of your live App website and its features
* A walk-through of your design process and decisions
* A review of your development/build process including challenges, ethical issues, favourite parts, etc
* Answer questions from the audience
* Use this presentation as an opportunity to pitch your ideas to 'investors'.