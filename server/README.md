# Black Codher Personal Project - Server side (backend)

All of your back end code should be in this folder.

Once you have your development environment up and running you'll be able to see the app running here:

```plain
http://localhost:8080
```

## Example App

In the example we have created a simple CRUD (create, read, update and delete) application and you can find the following:

1. How to connect to your mongo database
2. How to set up your schema
3. Four routes (`GET`, `POST`, `UPDATE` and `DELETE` requests)

Once the example is up and running, you can hit the below `profile` endpoint:

```plain
http://localhost:8080/api/profile
```

and you should be returned some JSON that looks similar to the below (but a bit more squashed):

```JSON
[
  {
    "_id": "5fc41c0e17878f1e2d5a2209",
    "first_name": "Efua",
    "last_name": "Akumanyi",
    "location": "London",
    "__v": 0
  },
  {
    "_id": "5fc41c1f17878f1e2d5a220a",
    "first_name": "Gary",
    "last_name": "McPherson",
    "location": "London",
    "__v": 0
  },
  {
    "_id": "5fc41c2e17878f1e2d5a220b",
    "first_name": "Tanya",
    "last_name": "Powell",
    "location": "London",
    "__v": 0
  },
  {
    "_id": "5fc41c3917878f1e2d5a220c",
    "first_name": "Michael",
    "last_name": "Hael",
    "location": "Port Harcourt city",
    "__v": 0
  }
]
```

The `profile` endpoint being used in the client example is a `GET` request

## Getting Started

If you prefer to run the back end in isolation from the front end you can do so by running the below command to start it up:

```shell
npm run server
```

Your back end application (API) will automatically restart after every change you make and save.
