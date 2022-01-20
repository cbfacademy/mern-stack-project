# Black Codher Personal Project

🎉 **Welcome to your Black Codher Personal Project** 🎉

Here's some boilerplate code with the initial setup for your project.

The expectation with this code is that you're able to clone the repository and get started building your own fullstack (MERN) application.

- [Project Structure](#project-structure)
  - [Client](#client)
  - [Server](#server)
- [Getting Started](#getting-started)
  - [Populating The Database](#populating-the-database)
  - [Starting The Development Server](#starting-the-development-server)
  - [Example Application](#example-application)
- [What's Next?!](#whats-next)

## Project Structure

The initial structure of the repository is:

```plain
- README.md
- client/
  - public/
  - src/
    - services/
    - index.js
    - App.js
  - README.md
- server/
  - data/
  - models/
  - routes/
  - index.js
  - README.md
```

### Client

The client folder is where you will store your front end code. Currently this contains a new project created with `create-react-app` and an example of how to call an API that's in active development.

✋🏾 **Put your React code here** ✋🏾

Read the `client/` [README](./client/README.md) for more details of the example front end app provided

### Server

The server folder is where you will store your backend code. You'll be building your API and making queries to your database here.

✋🏾 **Put your Node code here**✋🏾

Read the `server/` [README](./server/README.md) for more details of the example API provided

## Getting Started

### Environment variables

We have provided you with an example environment variables file called [`.env.example`](./.env.example). Rename this file to `.env` to use it.

In here you should assign your database connection string to the `DATABASE_CONNECTION_STRING` variable.

Make sure your connection string has the correct database name you are trying to connect to and follows this format:

```plain
mongodb+srv://<username>:<password>@cluster0.7k5er.mongodb.net/<database_name>
```

For the example app the database name is `example_db`.

You'll also see the `PORT` for your API in this file. Do not change this `PORT` number.

🛑 **YOUR ENVIRONMENT VARIABLES SHOULD NEVER BE COMMITED AND THE `.env` FILE HAS ALREADY BEEN ADDED TO THE [`.gitignore`](./.gitignore).** 🛑

### Populating The Database

If you choose to populate your database with some initial data you can do so using seed data. We have provided an example of seed data in the [`data.example/`](./server/data.example) folder in a file called [`profiles.mongodb`](server/data.example/profiles.mongodb).

All you need to do is rename the `data.example` folder to `data` and then create a `.mongodb` file that will create and insert data into your database and the correct collection(s).

To get the example app up and running you need to create an `example_db` database, a `profiles` collection and inserting some profile data. This can all be done by running the [`profiles.mongodb`](server/data.example/profiles.mongodb) file in your MongoDB playground.

If successful you should see 4 documents in your newly created `profiles` collection, in your new `example_db` database.

🛑 **YOU SHOULD NOT COMMIT YOUR INITIAL DATA. THE `data/`FOLDER HAS ALREADY BEEN ADDED TO THE [`.gitignore`](./.gitignore).** 🛑

### Starting The Development Server

You can start the client side code (front-end) and server side (back-end) separately using the commands in their respective folders. If you prefer to start them all together (this is the most convienient way), you can do so with the following commands:

1. `npm run dev-install` to install all the dependencies
2. `npm run develop` to start the development servers - [localhost:3000](http://localhost:3000) for front end and [localhost:8080](http://localhost:8080)

Please note that you will only need to run `npm run dev-install` once during your first installation, subsequently you will only need to run `npm run develop` to get your development environment up and running.

When making file changes to either your front or back end code your app will automatically restart and reload for you.

### Example Application

We have created an example application that will display a list of profiles that are stored in the `example_db` database.

If all's well with the above steps, you should see a list of familiar names. If your browser shows "No profiles found", re-check all the steps to ensure your database is populated and everything is connected properly.

## What's Next?!

Now it's time to start building your project.
