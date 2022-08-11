# Holiday Helper

This document explains the functionality of, and how to use, Holiday Helper.

Live application:
https://holiday-helper.netlify.app

## Introduction

Holiday Helper is an app to help travelers organise different elements of their holiday, designed to host various tools in one place and lessen the need to visit multiple locations to find different types of information.

Though holidays are meant to be a break from the everyday stresses of life, there are often so many moving parts that it can be easy for that time-out to become another source of stress in itself; Holiday Helper aims to relieve some of that with centralised information and tools to help travellers.

## Tech Stack

The frontend of the application is built in React, utilising the following npm packages: React Router, Chart.js, Iconify, and Firebase. Deployment of the frontend is hosted by Netlify.

The backend of the application is built in node.js, utilising the following npm packages: Express.js, dotenv, nodemon, and pg. Deployment of the backend is hosted by Heroku.

Testing was completed using Cypress e-2-e.

The design, planning, and project management for the app was undertaken using: Figma, Miro, Trello, Google Docs, and Slack.

## Run Locally

### Create a folder for the application

### Clone the project - you will need to clone both frontend and backend separately, into separate folders within the new folder you just created

```bash
  git clone https://github.com/SchoolOfCode/final-project_front-end-team-we-re-on-mute
  git clone https://github.com/SchoolOfCode/final-project_back-end-team-we-re-on-mute
```

### Go to the project directories - to run both frontend and backend, use separate terminals to navigate into each individually

Backend:

```bash
  cd final-project_back-end-team-we-re-on-mute
```

Frontend:

```bash
  cd final-project_front-end-team-we-re-on-mute
```

### Install dependencies in both terminals

```bash
  npm install
```

### Start the backend server and React frontend in their respective terminals

```bash
  npm start
```

## Setting up the Database

You'll need to setup your own database to host your data.

We used Heroku to host a database in PostgreSQL, so would recommend this to avoid any potential complications caused by using a different provider - but if you prefer to use a different one, that's your call! Just be prepared to troubleshoot using your chosen provider's documentation.

If using Heroku, please visit https://id.heroku.com/login and either login or sign-up.

## Environment Variables

To run this project and connect to your database, you'll need a .env file in the backend root folder, with the following environment variables:

`PGCONNECTIONSTRING`

You can find the credential for this in Settings on Heroku.

Please note - your .env file should be added to a .gitignore file to ensure it isn't pushed up to GitHub! Otherwise the credentials will be exposed and your database could be compromised.

## Creating and Populating the Table Within Your Database

Your database is currently empty, so you'll need to fix this by creating the table and populating it with data. A data file is included within the project and referenced in the populateResourcesTable.js file - if you want to change the data you include in your table, please see the data.js file within the db > libs folder.

To use the data provided, there are scripts already set up to enable to you very quickly and simply create and populate the table. Please run the following in the backend terminal:

```bash
npm run db:createTable
npm run db:populateTable
```

If you have any problems with your table and need to start over, you can run the script to drop the table before repeating the above create/populate steps:

```bash
npm run db:dropTable
```

## Authentication

To allow the Packing List feature to be used with peristent and personalised data, you will need to implement authentication. We did this using Firebase Auth, having the database stored with Firebase.

Without authentication, any updates to the list will be shared and available to all users.

As the current setup is using Firebase Auth, we would advise you to use the same for a simpler setup. If you opt to use another provider please be aware that authentication logic will need to be changed and you will need to refer to the provider's own documentation.

### You're now ready to go!

## Component Tree:

    -App.js
        -NavBar
        -Footer

        -Main
            -HomeBanner
            -HomeButtons

            -ToDoList
                -ToDo
                    -ToDoTitle
                    -ToDoButtons
                -AddToDo

            -Weather
                -DayComponent
                -WeatherCards

            -Exchange

            -Contacts
                -Emergency
                    -Countries
                    -AZDirectory

        -ContactUs

## How the App Works

### A user will land on the homepage and select an option, the pages and links for which are managed with React Router, EG:

```js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
```

```js
<Router>
  <Navbar />
  <div className="main-body">
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  </div>
  <Footer />
</Router>
```

```js
<Link to={path} className="main-homebutton">
  <Icon className="Icon" icon={iconName} />
  <p className="button-title">{title}</p>
</Link>
```

### The user selects a page from either the buttons on the homepage or from the navigation menu, and is then relocated to the selected page where they can carry out different activities.

### Requests to the database send a fetch request to the Express Server, EG:

```js
async function getEmergencyData() {
  const response = await fetch(
    "https://holiday-helper.herokuapp.com/emergency"
  );

  let data = await response.json();
  setEmergencyData(data);
}
```

### The Express Server in turn sends the appropriate request to the database, EG:

```js
emergencyContactsRouter.get("/country/:country", async function (req, res) {
  const country = String(req.params.country);
  console.log(`GET request for emergency_contacts for ${country}`);
  const responseObject = {
    success: true,
    message: "returned item ${country}",
    payload: await getEmergencyContactByCountry(country),
  };
  res.status(200).json(responseObject);
});
```

### Routes and models are stored separately to modularise the logic for communicating with the database. EG the model for the above route:

```js
export async function getEmergencyContactByCountry(country) {
  const res = await pool.query(
    `SELECT * FROM emergency_contacts WHERE country = ($1);`,
    [country]
  );
  return res.rows;
}
```

### Responses are set as state in the React frontend, using setState, and where requests are made on initial page render, the useEffect hook is utilised:

```js
import React, { useState, useEffect } from "react";
```

```js
const [country, setCountry] = useState("Select country");
const [emergencyData, setEmergencyData] = useState();

useEffect(() => {
  async function getEmergencyData() {
    const response = await fetch(
      "https://holiday-helper.herokuapp.com/emergency"
    );

    let data = await response.json();
    setEmergencyData(data);
  }
  getEmergencyData();
}, []);
```

### The app uses APIs to fetch information for weather and exchange rates:

https://fixer.io/documentation
https://openweathermap.org/api

The frontend uses async/await fetch requests to call for the required information on page render or user input. EG:

```js
async function getData() {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=1a1a53ffdffb4a6940e1c179d178a70a`
        );
        const data = await res.json();
      }
}
```

### Again, results from this are used to return state which then feeds in to how the elements of the page are rendered.

### The Packing List feature uses authentication to provide a personal packing list feature for the user that will persist with the changes they make. This is the only feature of the app that currently requires a login, and as such we kept the login section restricted to this page after making a conscious choice that the rest of the app should be open to all users without sign in/sign up being required.

```
construct login fuction collect email/passwrd from the user to authenticate them.
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
```

Authentication: here is an example of async function for Login async wait for user input take that check if user exists in the data base if so render the data the initial data current data has in the database. if user does't exist the catch the error and display error message {wrong email or password}
```
  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
      window.location.reload(false);
    } catch {
      alert("Error wrong Email/password!");
    }
    setLoading(false);
  }
```
