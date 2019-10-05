import express from 'express';
require('dotenv').config({ path: '.env' });
const app = express();

const fs = require('fs');
const csv = require('csvtojson');
const request = require('request');

import * as locations from "../data/stores.json";
import * as earthquakes from "../data/earthquake.json";
import * as loans from "../data/loans.json";

function getLocations(req) {
  var stores = []

  locations.Stores.map(x => {
    stores.push(
      {
        name: x.lct_name,
        number: x.lct_nbr,
        geometry: {
          location: {
            lat: x.ltd_msr,
            lng: x.lng_msr
          }
        }
      },
    )
  })
  return stores
}


function getEarth(req) {
  var quake = []
  earthquakes.Earthquakes.map(x => {
    quake.push(x)
  })
  return quake
}

function getLoans(req) { 
  var allLoans = []
  loans.Loans.map(x => {
    allLoans.push(x) 
  })
  console.log(allLoans)
  return allLoans
}

app.get('/react-interview/getLowesStores', (req, res) => res.send(getLocations(req)));
app.get('/react-interview/getEarthQuakes', (req, res) => res.send(getEarth(req)));
app.get('/react-interview/getLoanData', (req, res) => res.send(getLoans(req)));

app.listen(process.env.PORT);
