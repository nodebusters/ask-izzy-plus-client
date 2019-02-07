# Ask Izzy Plus Developer Instructions
Welcome honorary Nodebuster! If you'd like to have a poke around with Ask Izzy Plus, here's what you need to do to get up and running.

## Requirements
* Node.js v10.14.1+ (with NPM)
* MongoDB (running on localhost:27017, default port)

## Installation
After installing requirements, clone the client and server repositories to your local computer.

* Ask Izzy Plus Client: https://github.com/nodebusters/ask-izzy-plus-client
* Ask Izzy Plus Server: https://github.com/nodebusters/ask-izzy-plus-server

There is no requirement for the repositories to be installed in the same folder but both the client and the server need to be running at the same time for the application to work. 

To clone the repositories just type the following in the command line:  
* `$ git clone https://github.com/nodebusters/ask-izzy-plus-client.git` for the client.
* `$ git clone https://github.com/nodebusters/ask-izzy-plus-server.git` for the server.

### Installing dependencies:
To install dependencies open the repository directory in the command line and type:

`npm install`

This will install all the dependencies listed in `package.json` file. This process need to be done in both the server and client repositories. Note this dependencies are going to be installed locally. The only dependency you will need to install globally is `nodemon`, which can be installed with:

`npm install -g nodemon`

Nodemon will monitor if the server files of the application have changed and if so it will restart the server automatically. 

## Running Ask Izzy Plus

### Step 1: Environment Variables
#### Client
For the client side you will need to create an `.env.development` file in the root folder of the application, and then declare the following environment variables:
```.env
REACT_APP_GOOGLE_CLIENT_ID="[ADD-GOOGLE-API-KEY-HERE]"
REACT_APP_BASE_URL="[APP-API-URL-HERE]"
```
#### Server:
For the server side you will need to create an `.env` file in the root folder of the application, and declare the following environment variables:

```.env
MONGO_DRIVER="[INSERT-LOCAL-DATABASE-DRIVER]"
MONGO_DRIVER_PROD="[INSERT-PRODUCTION-DATABASE-DRIVER]"
SESSION_SECRET_KEY="[INSERT=SECRET-KEY-FOR-COOKIES]"
GOOGLE_CLIENT_ID="[INSERT-GOOGLE-API-KEY]"
GOOGLE_CLIENT_SECRET="[INSERT-GOOGLE-API-SECRET-KEY]"
GOOGLE_CALLBACK_URL="[INSERT-GOOGLE-API-CALLBACK]"
GMAIL_ACCOUNT="[INSERT-INFOXCHANGE-MAILER-EMAIL-ADDRESS]"
GMAIL_PASS="[INSERT-INFOXCHANGE-MAILER-EMAIL-PASSWORD]"
```
Note that SESSION_SECRET_KEY can be set to any string value, ideally encoded. On the other hand, Google `.env` variables are set in a Google Developer account, and the Gmail `.env` variables refers to the credentials for the mailer account used in the back end. Is important to note that in the current set up Gmail is the current email provider for nodemailer. This probably is not ideal if the site traffic increases and more emails need to be handled. In that scenario a provider like Mailgun would be more appropriate. 

### Step 2: Seed MongoDB
The MongoDB database can be seeded with generic data by running the `seedDatabase.js` seeding file located at the server folder. This process is appropriate to seed both local and cloud based databases. 

If the data to be seeded is available on JSON format, a most appropriate way to seed it would be using the mongoimport command. 

#### Local Database Seeding with mongoimport:
```
$ mongoimport --db <database-name> --collection <collection-name> --file <file-name>.json
```

#### mLab database seeding with mongoimport:
For an mLab database it will look similar to the following:
```
$ mongoimport -h ds211875.mlab.com:11875 -d <database-name> -c <collection-name> -u <user> -p <password> --file <input-file>
```

Note that `ds211875.mlab.com:11875` refers to the sandbox mLab database, and this value will be different if a different database is being used. 

### Step 3: Running the application on localhost
#### Server
To run the server on localhost just open the directory where the repository is installed and run:
`nodemon`

The entry point will be `index.js` file, and the server will be running on port 5000 by default.

#### Client
To run the server on localhost open the directory where the repository is installed and run:
`npm start`

The client will be running by default on port 3000. 

Note you need to have running both the client and the server at the same time, and in case you are using a local MongoDD database you will also need the mongo server running, to do this just open another terminal and type `mongod`.