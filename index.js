const functions = require('firebase-functions');


//First commit
exports.helloWorld = functions.https.onRequest((request, response) => { 
    response.send("Hello from Firebase!");
});
