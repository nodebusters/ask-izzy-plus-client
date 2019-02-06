# Ask Izzy Plus Developer Instructions
Welcome honorary Nodebuster! If you'd like to have a poke around with Ask Izzy Plus, here's what you need to do to get up and running.

## Requirements
* Node.js v10.14.1+ (with NPM)
* MongoDB (running on localhost:27017, default port)

## Installation
After installing requirements, clone the client and server repositories to your local computer.

* Ask Izzy Plus Client: https://github.com/nodebusters/ask-izzy-plus-client
* Ask Izzy Plus Server: https://github.com/nodebusters/ask-izzy-plus-server

In the command line:

```
$ git clone https://github.com/nodebusters/ask-izzy-plus-client.git
$ git clone https://github.com/nodebusters/ask-izzy-plus-server.git
```

Change directories into the `ask-izzy-plus-client` and `ask-izzy-plus-server` in separate tabs. In both, install the required dependencies listed in the `package.json` file by running:

```
$ npm i
```

## Running Ask Izzy Plus

### Step 1: Environment Variables
In the root folder of the `ask-izzy-plus-client` and `ask-izzy-plus-server`, create a new `.env` file and add the following configuration variables.

#### .env (Client)
```js
REACT_APP_GOOGLE_CLIENT_ID="[ADD-GOOGLE-API-KEY-HERE]"
REACT_APP_BASE_URL="[APP-API-URL-HERE]"
```

#### .env (Server)
```js
MONGO_DRIVER="mongodb://localhost/ask-izzy"
MONGO_DRIVER_PROD="[INSERT-PRODUCTION-DATABASE-LINK]"
SESSION_SECRECT_KEY="[SECRET-KEY-FOR-COOKIES]"
GOOGLE_CLIENT_ID="[INSERT-GOOGLE-API-KEY]"
GOOGLE_CLIENT_SECRET="[INSERT-GOOGLE-API-SECRET-KEY]"
GOOGLE_CALLBACK_URL="/auth/login/google/callback"
GMAIL_ACCOUNT="[INSERT-INFOXCHANGE-MAILER-EMAIL-ADDRESS]"
GMAIL_PASS="[INSERT-INFOXCHANGE-MAILER-EMAIL-PASSWORD]"
```

### Step 2: Seed MongoDB

### Step 3: Backend Server

### Step 4: Frontend Client