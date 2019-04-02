require('dotenv').config();
const express = require('express');
const massive = require('massive');

const { CONNECTION_STRING, SERVER_PORT } = process.env;

const app = express();
app.use( express.static( `${__dirname}/../build` ) );

//MIDDLEWARE
app.use(express.json());

//DATABASE CONNECTION
massive(CONNECTION_STRING).then( db => {
   app.set('db', db);
   console.log('Connected to database');
   app.listen(SERVER_PORT, () => {
      console.log(`Listening on port: ${SERVER_PORT}`)
   })
})

//ENDPOINTS
