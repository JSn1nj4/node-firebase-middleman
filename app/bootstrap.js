const {initializeApp, applicationDefault} = require("firebase-admin/app");
const {projectIds, firebaseDbUrl} = require("../config/strings");
require('dotenv').config()

// prevent accidentally enabling dev features
process.env.APP_ENV ??= 'production'

if (!process.env.GOOGLE_APPLICATION_CREDENTIAL) {
    console.error("Google credentials not found! Aborting...")
    process.exit(1)
}

const app = initializeApp({
    credential: applicationDefault(),
    projectId: projectIds[process.env.APP_ENV],
    databaseURL: firebaseDbUrl,
})

module.exports = app