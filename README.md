# Ask Izzy Plus <!-- omit in toc -->
Ask Izzy Plus is self-service application for service providers listed on Ask Izzy to update their contact details with our client Infoxchange. Built in the JavaScript MERN stack for our final Coder Academy group project.

[![Ask Izzy Plus Logo](docs/images/ask-izzy-plus-logo.png)](https://ask-izzy-plus.netlify.com/)

## Ask Izzy Plus Links
### Deployed <!-- omit in toc --> 
* Client: https://ask-izzy-plus.netlify.com
* Server: https://ask-izzy.now.sh/

### GitHub Repositories <!-- omit in toc --> 
* Client: https://github.com/nodebusters/ask-izzy-plus-client
* Server: https://github.com/nodebusters/ask-izzy-plus-server

## Summary <!-- omit in toc -->
Ask Izzy Plus is a self-service application built to our client Infoxchange's specifications to allow service providers listed on Infoxchange's Ask Izzy platform to update organisation, site and service contact details. Built using JavaScript and the MERN stack (**M**ongoDB, **E**xpress, **R**eact and **N**ode.js) for our final Coder Academy project.

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
- [The Brief](#the-brief)
  - [The Client](#the-client)
  - [The Problem](#the-problem)
  - [The Solution](#the-solution)
- [Application Design](#application-design)
  - [Design Process](#design-process)
  - [User Stories](#user-stories)
  - [Workflow Diagram: User Journeys](#workflow-diagram-user-journeys)
    - [User Journey for Service Provider](#user-journey-for-service-provider)
    - [User Journey for Administrator](#user-journey-for-administrator)
  - [Wireframes](#wireframes)
    - [Ask Izzy UI/UX](#ask-izzy-uiux)
    - [Ask Izzy Fonts and Colours](#ask-izzy-fonts-and-colours)
    - [Ask Izzy Assets](#ask-izzy-assets)
    - [Ask Izzy Branding and Promotional](#ask-izzy-branding-and-promotional)
    - [Ask Izzy Plus Wireframes](#ask-izzy-plus-wireframes)
  - [Database Schema](#database-schema)
  - [Data Flow Diagram](#data-flow-diagram)
  - [OO Design Documentation](#oo-design-documentation)
- [Project Management & Planning](#project-management--planning)
  - [Project Plan and Timeline](#project-plan-and-timeline)
  - [Team Communication](#team-communication)
  - [Client Communications](#client-communications)
    - [Client Minutes](#client-minutes)
    - [Gmail](#gmail)
- [Tools & Methodologies](#tools--methodologies)
  - [Task Management](#task-management)
  - [Design Tools](#design-tools)
  - [Source Control](#source-control)
    - [GitHub and Gitflow](#github-and-gitflow)
  - [Agile Methodologies](#agile-methodologies)
  - [Code Review](#code-review)
  - [Deployment](#deployment)
  - [Frontend Client: Netlify](#frontend-client-netlify)
  - [Backend Server: Now](#backend-server-now)
  - [Database: mLab](#database-mlab)
  - [Testing](#testing)
- [Short Answers: Post-Review](#short-answers-post-review)
  - [Q1: What are the most important aspects of quality software?](#q1-what-are-the-most-important-aspects-of-quality-software)
  - [Q2: What libraries are being used in the app and why?](#q2-what-libraries-are-being-used-in-the-app-and-why)
    - [Frontend Client](#frontend-client)
    - [Backend Server](#backend-server)
  - [Q3: A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?](#q3-a-team-is-about-to-engage-in-a-project-developing-a-website-for-a-small-business-what-knowledge-and-skills-would-they-need-in-order-to-develop-the-project)
  - [Q4: Within your own project what knowledge or skills were required to complete your project, and overcome challenges?](#q4-within-your-own-project-what-knowledge-or-skills-were-required-to-complete-your-project-and-overcome-challenges)
  - [Q5: Evaluate how effective your knowledge and skills were this project, using examples, and suggest changes or improvements for future projects of a similar nature?](#q5-evaluate-how-effective-your-knowledge-and-skills-were-this-project-using-examples-and-suggest-changes-or-improvements-for-future-projects-of-a-similar-nature)
- [Future Development](#future-development)
  - [Extensions](#extensions)
  - [Handover/Feedback](#handoverfeedback)
  - [Client Survey](#client-survey)
  - [Running Ask Izzy+ (Developers)](#running-ask-izzy-developers)
- [Presentation](#presentation)
- [Conclusion](#conclusion)

## About Ask Izzy Plus
### Project Background
Tasked with finding a real world customer to design, build, deploy and present a web application for our final Coder Academy project, Ask Izzy Plus is a self-service application built in JavaScript using the MERN stack to our client Infoxchange's requirements. 

The scope of our project for the MVP was to build a working prototype/proof of concept application for our client to pilot with a sample of Ask Izzy service providers as part of Infoxchange's broader Ask Izzy Plus project. To this end, simplifying the process for service providers to update their information with Infoxchange, and enabling service providers to update their details via a self-service application was a key pain point/wishlist identified by Infoxchange.

After finding our client, we met and worked with Ask Izzy's product manager to understand their current challenges and suggest ideas for a custom web application to solve a particular problem or area of this pain point. For the initial MVP, creating a prototype self-service application to allow service providers to update organisation, site and service information was the end goal. Integrating this functionality directly into the core Ask Izzy ecosystem was beyond the scope of this project so we created our own document database aligned as closely as possible to Infoxchange's data structure. From there, we worked to design and deploy a complete MVP over a three-week period written using the JavaScript MERN stack (**M**ongoDB, **E**xpress, **R**eact and **N**ode.js), and other node packages.

### Functionality and Features
[Ask Izzy Plus](https://ask-izzy-plus.netlify.com) is a supplementary self-service application for service providers listed on Infoxchange's flagship Ask Izzy platform, a mobile website that helps people who are homeless or at risk of becoming homeless to find essential services they need nearby and now.
* Using Ask Izzy Plus, service providers from Ask Izzy that have been whitelisted to use the platform by admins can login/logout and view contact details structured at multiple levels (organisation, site and services), in line with the data structure of the Infoxchange's Service Seeker database (which supports a number of directory services provided by Infoxchange, including Ask Izzy).
* From there, service providers can create, read, update and delete details for the organisation, sites and services they have been associated with. Users are associated with a particular organisation (which contain multiple sites and associated services with each site) by admins when onboarded that determine which organisation, sites and services they can view and edit.
* In turn, admin users (i.e. Nodebusters or Infoxchange) are responsible for pre-qualifying and onboarding service provider users onto Ask Izzy Plus first by whitelisting authorised email addresses and associating authorised users with a particular organisation. Admins can view all whitelisted users and whitelist a new user to an organisation in the admin dashboard.
* Our Ask Izzy Plus prototype uses Google OAuth to handle all user logins and manage authentication via a third-party provider.

|[![](/docs/images/ask-izzy-plus-ui-user-desktop.png)]() | [![](/docs/images/ask-izzy-plus-ui-admin-desktop.png)]() |
|-----------|-----------|
![](/docs/images/ask-izzy-plus-ui-user-mobile.png) | ![](/docs/images/ask-izzy-plus-ui-admin-mobile.png)|

## The Brief
### The Client

**Infoxchange**

Our client, [Infoxchange](https://www.infoxchange.org/au/ask-izzy), is a not-for-profit social enterprise/non-government organisation that develops and supports software for a wide range of purposes to help support people who face disadvantage and the community organisations that support them. Infoxchange's Service Seeker database is Australia's largest up-to-date directory of health and welfare services, powering its sister directory Ask Izzy, the product we were supporting for our project brief.

**Ask Izzy**

Infoxchange's mobile website [Ask Izzy](https://askizzy.org.au) is a centralised directory that provides a broad range of location and service-based search for people at risk of or experiencing homelessness or disadvantage to service providers across Australia. Users can find out about location based housing options, where to access meals, material aid and health services and local services including legal, financial, alcohol and other drugs, family violence and mental health. 

Designed mobile-first, and free and anonymous to use, Ask Izzy is compatible across desktop, tablet and mobile and connects close to 1000 people a day to help nearby, with its primary users being people who face disadvantage or risk, and staff working in organisations that support them.

Infoxchange's Ask Izzy website is an open source application and can be located on [GitHub](https://github.com/ask-izzy/ask-izzy).

### The Problem
With over 360,000 service providers listed across Australia and close to 1,000 people a day connecting to Ask Izzy, accuracy of services available and up-to-date information is hugely important to clients using these services and vital to keeping Ask Izzy relevant. Infoxchange policy requires that direct contact be made with service providers prior to adding or updating records to comply with privacy laws, confirm that changes were submitted by the service provider's office and verify the validity, accuracy and completeness of the information.

Infoxchange employs several updating methods (scheduled bulk auto-emails, self-responses via online forms, mail-outs, telephone and fax-backs), with a week's turnaround on change requests and phone contact proving itself the most effective updating method. Currently, if service details need to be updated or removed from the Ask Izzy and Infoxchange Service Seeker directory, users must click on the Feedback/Report an Error link on the individual service listing and provide all of the requested information.

To this end, simplifying the process for service providers to update their information, and enabling service providers to access a self-service functionality served as the basis for our prototype MVP.

### The Solution
> “Everyone wears different hats depending on the day.”

> “The System should be a funnel, instead it’s a colander.”

With the goal of the exploring the needs of staff working in organisations that use Ask Izzy to find out what additional functionality would make it useful to them, the Ask Izzy Plus project team at Infoxchange identified some key insights and challenges through recent user research (one-on-one interviews with service providers working in the not for profit sector and with people who have experienced homelessness) that served the basis for our prototype MVP, namely:

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
### Design Process
After receiving an initial brief and researching Ask Izzy's existing UX/UI we met with our client Sam, Ask Izzy's product manager in person to discuss and confirm business, design and technical requirements. Sam gave us an overview of the scope and intended use of the app (namely, a working prototype to pilot with a sample of Ask Izzy service providers), and the core functionality and design of the MVP: a self-service application to allow Ask Izzy service providers to view and update organisation, site and service details.

Integrating this functionality into the existing main Ask Izzy platform was beyond the scope of our project; being a prototype for our client, this meant we could create our own database. However, we endeavoured to align our document database as closely as possible to Infoxchange's relational database structure. For branding and design consistency, Sam suggested and we agreed that the Ask Izzy Plus app should mimick the layout and design elements of Infoxchange's Ask Izzy UI, and be compatible with mobile, tablet and desktop.

From there, throughout the project we provided Sam with periodic updates regarding the status of the project or followed up with her to query and confirm any follow up questions or open items from our initial meeting.

### User Stories 
Following Agile methodologies, user stories were written up in Trello to guide the development of our MVP from the perspective of our core Ask Izzy Plus end users to capture a description of our software features from their perspective: users (service providers) and admin (Infoxchange).

This pushed us to provide a high level definition of a requirement to create a simplified description, and helped to break down the features and functionality of the MVP early on.
* As a `SERVICE PROVIDER`, I need an application where I can log in and easily view, create, update and delete my organisation, sites and services details. 
* As a `ADMINISTRATOR` working for Infoxchange, I need an administrator dashboard where I can manage the service providers’ access by creating a new user, linking the user with organisation and deleting a user.

![Trello User Stories](/docs/images/ask-izzy-plus-trello-user-stories.png)

### Workflow Diagram: User Journeys
In Figma, we created user journeys for our end-users (service providers and admin) to map the user choices and views within our application.

#### User Journey for Service Provider
![User Journey for Service Provider](/docs/images/user_journey_service_provider.png)

#### User Journey for Administrator
![User Journey for Administrator](/docs/images/user_journey_admin.png)

### Wireframes
Continuing with our UX/UI design documentation, we used Figma to create our wireframes for our application, and map out Ask Izzy's brand colours, typography, assets to develop the visual identity for Ask Izzy Plus.

#### Ask Izzy UI/UX
![Ask Izzy UI/UX](docs/images/UI_UX.png)

#### Ask Izzy Fonts and Colours
![Ask Izzy Font and Font Colours](docs/images/font.png)

#### Ask Izzy Assets
![Ask Izzy Assets](docs/images/banners.png)

#### Ask Izzy Branding and Promotional
![Ask Izzy Branding Assets](docs/images/branding.png)

Mimicking the general UI layout of the core Ask Izzy platform in our MVP had multiple advantages: along with consistency in UX, the UI itself lends itself well to responsive design, accessability and readability.

#### Ask Izzy Plus Wireframes
![Figma Wireframes](/docs/images/wireframe.png)

### Database Schema
Infoxchange's Service Seeker platform uses a relational database with information structured at multiple levels, namely:
* Organisation: which can contain multiple Sites.
* Site: which can supply multiple Services at a single Site.
* Service: a single service that a Site offers or an individual Practitioner.

While the prototype Ask Izzy Plus application uses a different database both in terms of structure (a document rather than a relational database) and storage (MongoDB instead of an SQL database), we endeavoured to align our database as closely as possible to Infoxchange's existing Service Seeker database, based on documentation and data samples provided to us during the briefing process.

Given the numerous information fields associated with a single organisation, site and service, and the nested nature of the database models, this stage proved to be one of the trickiest elements to reconcile.

Based on Infoxchange's information hierarchy, the following MongoDB collections/schemas were created for Ask Izzy Plus: `User`, `AdminUser`, `Service` (nested as an array within `Site`), `Site` (nested as an array within `Organisation`) and `Organisation`.
* `Organisation`: An Organisation represents a single auspicing group or body responsible for sites providing services.
* `Site`: A Site represents a physical location, or alternatively a mobile unit with a catchment.
* `Service`: A Service represents a single service that a site offers; services offered at multiple sites will have different service records per site. Alternatively, a Practitioner (an individual that should be listed as a referral endpoint) can also be listed as a Service; individuals working at multiple sites will have different records.
  
  ```js
    const serviceSchema = new Schema({
        id: String // auto-generated by Mongoose
        name: String,
        description: String,
        referralInfo: String,
        adhcEligible: Boolean,
        assessmentCriteria: String,
        targetGender: String,
        availability: String,
        billingMethod: String,
        cost: String,
        crisisKeywords: String,
        details: String,
        eligibilityInfo: String,
        ineligibilityInfo: String,
        fundingBody: String,
        healthcareCardHolders: Boolean,
        intakeInfo: String,
        intakePoint: String,
        isBulkBilling: Boolean,
        ndisApproved: Boolean,
        promotedService: Boolean,
        specialRequirements: String,
        language: String,
        ageGroupKeyword: String,
        ageGroupDescription: String,
        serviceTypes: String,
        indigenousClassification: String,
        capacityStatus: String,
        capacityStatusText: String,
        capacityFrequency: String,
        capacityLastNotification: String,
        capacityLastStatusUpdate: String,
        capacityExpireDate: String,
        accreditationName: String,
    });

    const openingHoursSchema = new Schema({
        id: String // auto-generated by Mongoose
        day:String,
        openTime:String,
        closeTime:String,
        openingHoursNote: String,
    })

    const siteSchema = new Schema({
        id: String // auto-generated by Mongoose
        name: String,
        accessibility: String,
        locationDetails: String,
        parkingInfo: String,
        publicTransportInfo: String,
        isMobile: Boolean,
        emailAddress: String,
        emailIsConfidential: Boolean,
        website: String,
        postalAddress: String,
        postalAddressState: String,
        postalAddressSuburb: String,
        postalAddressPostcode: String,
        postalAddressIsConfidential: Boolean,
        phoneNumber: String,
        phoneKind: String,
        phoneIsConfidential: Boolean,
        openingHours: [openingHoursSchema],
        addressBuilding: String,
        addressLevel: String,
        addressFlatUnit: String,
        addressStreetNumber: String,
        addressStreetName: String,
        addressStreetType: String,
        addressStreetSuffix: String,
        addressSuburb: String,
        addressState: String,
        addressPostcode: String,
        addressIsConfidential: Boolean,
        servicesInSite: [serviceSchema],
    });

    const organisationSchema = new Schema({
        id: String // auto-generated by Mongoose
        name: String,
        description: String,
        createdAt: Date,
        lastUpdated: Date,
        website: String,
        abn: String,
        providerType: String,
        alsoKnownAs: String,
        emailAddress: String,
        emailIsConfidential: Boolean,
        postalAddress: String,
        postalAddressState: String,
        postalAddressSuburb: String,
        postalAddressPostcode: String,
        postalAddressIsConfidential: Boolean,
        phoneNumber: String,
        phoneKind: String,
        phoneIsConfidential: Boolean,
        ceo: String,
        sitesInOrganisation: [siteSchema],
    });
    ```

* `User`: A user from an Ask Izzy service provider.
    ```js
    const userSchema = new Schema({
        email: String,
        organisation:{type: mongoose.Schema.Types.ObjectId, ref: 'Organisation'}
    });
    ```

* `Admin User`: An admin user for Ask Izzy Plus from Infoxchange.
    ```js
    const AdminUserSchema = new Schema({
        email: String,
        firstName: String,
        lastName: String
    });
    ```

### Data Flow Diagram
Because of the adaptability and flexibility of the MERN software stack(**M**ongoDB, **E**xpress, **R**eact and **N**ode.js), along with other client, server and database npm packages like Axios, Nodemailer and Mongoose, we were able to scaffold a prototype for Ask Izzy Plus, with the overall data flow represented below:

![MERN Stack Overview](/docs/images/data-flow-mern.png)

### OO Design Documentation
When considering OO design and class attributes, methods and relationships, our main consideration was representing people (users) and locations (organisations, sites and services), and the relationship between them: our document database has three collections, `AdminUser`, `User` and `Organisation`, with arrays of `Sites` and `Services` embedded across three levels in the Organisation collection.

For the prototype it was preferred that authentication be handled by a third party, for which we implemented Google OAuth using Passport, an npm package. As the admin user, our client can create a new user (service provider) by whitelisting a Google email address and associating them with an organisation, view all users and delete users from the admin dashboard.
From the service provider portal, whitelisted users can create, read, update and delete locations and update their information and contact details. An update from the current record in our database will trigger a mailer notification to admin (Infoxchange's support team) that an update is required.

The Ask Izzy Plus client uses Axios to query the User/AdminUser and Organisation collections in the MongoDB database and iterative logic to display the nested arrays of Sites and Services embedded within the Organisation collection.

![OO Design - React Component Family Tree](/docs/images/oo-design-react-family-tree.png)

## Project Management & Planning
### Project Plan and Timeline

To manage the project and keep track of tasks and communications within the team and with our client in the day-to-day and for documentation purposes we used Trello, Slack, Google Docs, Google Sheets and email to delegate tasks and have a single source of truth and line of communication, this informed our Git and code review processes.

![Timeline](/docs/images/project-plan-timeline.png)

### Team Communication
After collaborating on an initial brief with our client to use as a project charter, with a preliminary statement of project scope to obtain initial sign-off, our planning methodology involved:

* Allocating roles and responsibilities to team members, based on project solution requirements and monitor each other's assigned work using Trello and GitHub Organisations.
* Preparing a work breakdown and schedule of key milestones in Google Sheets.
* Monitoring client and team communications via email and Slack, using Google Docs to record minutes, reassess ongoing project scope changes, risks, blockers and issues.
  
  ![Slack](/docs/images/slack.png)

### Client Communications
With product manager Sam coming from a software development background, managing expectations and communications with our Infoxchange was extremely straightforward and clear. Since the finished app will be used as a prototype, we felt assured by the fact there would ultimately be some kind of business use for it while also being able to deliver an MVP in three weeks.

We were particularly keen and pleased to work with a non-for-profit organisation, and happily surprised to discover that Ask Izzy is an open source project on GitHub.

After our initial in person meeting with Sam and Claire from Infoxchange, we had one further follow up and stayed in touch with feedback and questions via email and keeping track of the minutes in Google Sheets

#### Client Minutes
![Client Minutes](/docs/images/client-communications-minutes.png)

#### Gmail
![Client Emails](/docs/images/client-communications-emails.png)

## Tools & Methodologies
### Task Management
Using Trello as our primary project management tool to enforce Agile and Scrum workflow processes, allocate and categorise tasks and have a single source of truth to monitor what each of us were currently working on, we could evalulate our progress throughout the project by seeing all current tasks and blockers visually, creating lists under the following:
* `DELIVERABLES`
* `TO DO`
* `TODAY`
* `DOING`
* `DONE`
* `MVP`
* `NICE TO HAVE`

In the planning stage, we broke down the MVP functionality and features based on the user stories, adding more as new tasks and bugs opened up, and relocating cards into the relevant columns each day. We also took advantage of the calendar tool in order to keep track of important deadlines and to allocate each new task to a team member right away so it was always clear what each of us were working on.

![Trello](docs/images/trello-screenshot.png)

### Design Tools
For designing and editing assets, wireframing and diagramming for this project, Figma and Balsamiq were used to quickly ideate a mock up, create assets for the app and README, and create a mood board for Infoxchange's Ask Izzy branding and UI:

![Balsamiq](/docs/images/balsamiq.png)

### Source Control
#### GitHub and Gitflow
We decided to create a GitHub Organisation - Nodebusters - with the objective of having all members as owners, with separate repos for frontend and backend, and test repos to practice creating branches, pull requests and deployment. The main advantage of this approach is that we could optimise production processes as under this setup any team member is able to code review and merge pull requests.

Nevertheless, we decided also that if a team member creates a pull request she/he will not merge the pull request themselves but instead another team member will be responsible for the code review and potentially merging that branch. 

As an organisation we also agreed to work in well named branches, leave descriptive commit comments and always push the branch instead of master in order to raise well documented pull requests.

### Agile Methodologies
We implemented several Agile methodologies during the planning and execution of the project. As an organisation we decided to distribute the responsibilities of a scrum master among all the team members, so all of us would be accountable for understanding and approving each other's code before merging to master. We used Trello to breakdown work tasks and responsibilities in Kanban-style cards organised in scrum lists to track our progress.

We also performed daily standups where we briefly discussed how all the different parts of the project were developing and how the project as whole was being implemented, as well participating in regular 10am standups with the Coder Academy instructors.

From the beginning we focused in working software and customer collaboration. We aimed to have a conversation with the customer as the project was developing. For us customer satisfaction was the main priority and we aimed to adapt accordingly to the customer requirements.

Sustainable development and simplicity were also very important for us. During the planning process we agreed to set realistic goals with a good buffer in case of unexpected issues. Likewise, we agreed on pursuing the satisfaction of our customer requirements in the simplest way possible and learning as much as we could in the process.

Another important technique we implemented in the initial stages of the project was paired and mob programming. This was very helpful to get all the team members on the same page in terms of database design and application flow, particularly at the start. We agreed to deploy and commit early and often to isolate any issues between development and production to guide our documentation and handover process.

### Code Review
In light of our aforementioned GitHub setup, we all agreed to share responsibility as co-owners of Nodebuster's repositories. 
Team members were not allowed to raised and merge their own pull request; instead another team member was responsible for code review and merging or rejecting if appropriate. Early on we developed a charter to capture our [Gitflow process](https://github.com/nodebusters/ask-izzy-plus-client/blob/master/git_workflow.md).

This approach worked really well as it allowed us to pick up issues early in the development process. Occasionally we had conflicts but we were able to resolve them relatively quickly.

The conflict solving process was as follows:
```
1. Fetch the branch to be merged locally. 
2. Pull the latest version of master locally.
3. Merge master to the branch to be merged. 
4. Code review an solve conflicts as required. 
5. Push the branch now we the conflicts solved.
```

### Deployment
We decided to use a distributed deployment approach for this project with the following set up:

### Frontend Client: Netlify
The client side of the application was deployed using Netlify continuous deployment. The Netlify GUI was utilised to manage environmental variables and build processes managed through the `.env` file. 

### Backend Server: Now
The server side of the application was deployed in now.sh, and a `now.json` file was used to manage environment variables and build processes.

### Database: mLab
The database of the application was stored in a mLab sandbox database as a service.

### Testing
Testing was performed often during the development of the application. Testing techniques included the following:

* Console logging variables both in the back and front end in order to check that the values are as expected. 
* Testing new features in new git branches and to check if they perform as expected in localhost before deploying. 
* Using Postman to confirm the server routes are receiving and sending the right information.
* Testing the production version of the application by performing a diverse range of processes live.
* Deploying updates to the server, client and database regularly to isolate errors and review error logs.

## Short Answers: Post-Review
### Q1: What are the most important aspects of quality software?
Based on our experience creating a small-scale end to end application for a client, clearly an important aspect of designing and developing quality software is focusing fundamentally on the problem you're solving and the service and experience you're delivering for all your end users to solve that problem, rather than a specific feature or functionality. From the perspective of our end-users, our client and service providers, we opted to focus on solving a small but complex problem well, and in the process, we learned to scrap or scale down features that didn't deliver as much value to users, or to de-prioritise them as stretch goals.

From a dev pespective, a hugely important aspect of quality software is to write code that is logical, lean, but legible for other developers who may work on the codebase with or after you, and adhering to best practices and principles to avoid code smell or horrible Git conflicts:
* Following functional programming principles and writing code that is declarative, immutable and treats computation and composition as the evaluation of mathematical functions and components.
* Don't Repeat Yourself: writing functions and components that are reusable and modular.
* Installing npm packages and dependencies only as required to keep the application as lightweight as possible;
* Separation of concerns to reduce code complexity by breaking a large application down into smaller units of encapsulated functionality; each module or layer in an application should only be responsible for one thing and should not contain code that deals with other things.

### Q2: What libraries are being used in the app and why?
#### Frontend Client
* axios@0.18.0: To perform promise based HTTP requests
* history@4.7.2: To redirect pages programmatically in react. 
* jwt-decode@2.2.0: To decode jwt tokens.
* react@16.7.0: To produce view/controller components of our application. 
* react-confirm-alert@2.1.0: To handle confirm dialogs. 
* react-dom@16.7.0: To interact with the DOM.
* react-google-login@5.0.0: To handle google OAuth process. 
* react-router-dom@4.3.1: To load components in different routes. 
* react-scripts@2.1.3: To configure scripts for create-react-app.
* react-tabs@3.0.0: To easily create tab components. 

#### Backend Server
* cookie-parser@1.4.3: To parse cookies with signatures. 
* cookie-session@2.0.0-beta.3: To configure and manage sessions. 
* cors@2.8.5: To enable cors in the server. 
* dotenv@6.2.0: To have access to environment variables.
* express@4.16.4: To configure and develop the app API. 
* jwt-decode@2.2.0: To decode jwt tokens.
* mongoose@5.4.6: To interact with MongoDB database. 
* nodemailer@5.1.1: To send emails from node. 
* nodemon@1.18.9: To To monitor the performance of the API during development.
* now@13.1.2: To deploy the server in now.sh
* nodemailer@5.1.1: To send emails from node. 
* passport@0.4.0: To deal with authentication in node. 
* passport-google-oauth@1.0.0: To handle google OAuth strategy. 

### Q3: A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?
Based on our experience with developing a custom application for a client, some key takeaways and recommendations about the knowledge and skills required to develop a project of this scope from end to end are:

* **Business Context**: Developing software that brings value to a client requires a thorough understanding of the underlying business requirements data structure and processes your application is supported. Underestimating this aspect of software development can set the project up for failure before it even starts by developing software that won't be used.

* **Future Plans**: Likewise is important to understand what are the future plans, budget, strategic objectives and biggested threats and challenges of your client's organisation. This information is helpful to develop software that adds value to your clients organisation not only for now but in the longer term. 
  
* **Current Database Structure**: Where appropriate, is important to consider your client's current database structure and try to preserve it as much as possible. This will enable your client to easily migrate from one system to other. 

* **Expected Traffic/Scope**: is important understand expectations regarding web traffic and the amount of users the website will handle. Our prototype will be piloted with a small sample of service providers while the longer-term implementation of this functionality into Infoxchange's ecosystem would involve a number of large integrations and querying a database with over 350,000 service listings.

### Q4: Within your own project what knowledge or skills were required to complete your project, and overcome challenges?
The technical knowledge and skills required to complete this project included:
* **Vanilla Javascript**: understanding functional programming principles, asynchronous code, and callbacks.
* **Document Databases (MongoDB/Mongoose)**: converting a relational databse structure into document database.
* **Express API/Server**: creating and using middleware to manage requests and respsonses to public and protected routes.
* **React.js**: working with multiple layers of components and create-react-app folder structure.
* **Node.js**: using Node.js to run multiple localhost ports on one computer.
* **NPM and NPM libraries**: researching and applying NPM packages and libraries to our application.
* **GitHub/GitHub Organisations**: each of us were required to create branchs, push to master, peer to peer code review and merging or resolving conflicts in GitHub.
* **HTML5**: compiling semantic HTML in React components logic.
* **SASS/CSS3**: using Sass compilers to create mixins and global variables to refactor code.
* **Figma/Balsamiq**: used as a design tool for wireframes and assets.
* **Trello**: breakdown of tasks following Agile methodologies.
* **Distributed Deployment**: client, server and database deployed to Netlify, Now, mLab respectively.
* **Google Developer API**: required to implement Google OAuth for Passport authentication.

Looking back as a group we agreed that soft skills were essential to complete this project and overcome challenges, namely:
* Team collaboration
* Good communication skills
* Project management
* Abstract thinking
* Research and development skills

### Q5: Evaluate how effective your knowledge and skills were this project, using examples, and suggest changes or improvements for future projects of a similar nature?

As a team we had all the required knowledge and skills to complete this project however we had had a specific focus on backend, frontend and project management. The allocation of tasks was mainly based on our strengths. For future projects we would like to further optimise our time management and efficiency so everyone gets a chance to work on their weaknesses as well while still being able to finish the project. 

By the time we started this project not everyone was familiar with the basics of MERN stack. For future projects we would like to make sure everyone at least is comfortable with the basic content from class so we could better use our time while working as a group. 

## Future Development
### Extensions
* Service providers can update their vacancy details if they provide crisis/short term accommodation and for the vacancy status to be updated on their service pages. 
* Create lists of ‘favourite’ services that they could share easily with their clients by hardcopy, SMS or email.   
* The ability to view feedback from clients on their services.
* The ability to get updates or notifications. For example, weather warnings that may impact their clients/rough sleepers.
* Notification centre in admin dashboard to display and approve/disapprove all requests from service providers. 
* Different levels of access for organisation users, such as some users only have access to certain sites or services.
* Integration with the main Ask Izzy app. 

### Handover/Feedback
### Client Survey
As part of our planned retrospective, we've created a client survey using Typeform for Sam and Claire to complete after we've demoed the application in person and provided handover documentation to Infoxchange.

[![Nodebusters Client Survey](docs/images/client-survey.png)](https://lindalai1.typeform.com/to/cnNTDX)

### Running Ask Izzy+ (Developers)
Developer instructions for running Ask Izzy Plus can be found on in this [GitHub](https://github.com/nodebusters/ask-izzy-plus-client/blob/master/README_dev.md) repo.

## Presentation
You are to deliver a 7 minute presentation to the class. The presentation should include:

* A walk-through of your live App website and its features
* A walk-through of your design process and decisions
* A review of your development/build process including challenges, ethical issues, favourite parts, etc
* Answer questions from the audience
* Use this presentation as an opportunity to pitch your ideas to 'investors'.

The slide deck used to present to the Coder Academy class is available [here](/docs/ppt/AskIzzyPlus.pdf).

## Conclusion
Despite some early and unexpected setbacks, overall we were pleased with the final MVP delivered and felt that the team worked well together. Overall we were able to achieve the initial design and functionality we envisione from our initial brief and look forward to gettng our client's feedback!