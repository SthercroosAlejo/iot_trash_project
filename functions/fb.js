"use strict"

const {initializeApp, cert} = require("firebase-admin/app");
const {getFirestore} = require("firebase-admin/firestore");
require('dotenv').config();

initializeApp({
  credential: cert(`./${process.env.API_FIREBASE_ACCOUNT}`)
});


const db = getFirestore();

module.exports = {
  db
}
