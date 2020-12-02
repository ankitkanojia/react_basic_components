require('dotenv').load()
const express = require('express')
const app = express()
var AccessToken = require("twilio").jwt.AccessToken;
var VideoGrant = AccessToken.VideoGrant;

// For Text Chat
const Twilio = require('twilio')
const chance = new require('chance')()
const express = require('express')
const app = express()
const AccessToken = Twilio.jwt.AccessToken
const ChatGrant = AccessToken.ChatGrant



app.get('/token/:identity', function (req, res) {
  const identity = req.params.identity;

  // Create an access token which we will sign and return to the client,
  // containing the grant we just created
  var token = new AccessToken(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_API_KEY,
    process.env.TWILIO_API_SECRET
  );

  // Assign the generated identity to the token
  token.identity = identity;

  const grant = new VideoGrant();
  // Grant token access to the Video API features
  token.addGrant(grant);

  // Serialize the token to a JWT string and include it in a JSON response
  res.send({
    identity: identity,
    jwt: token.toJwt()
  })
})

app.listen(3001, function () {
  console.log('Programmable Video Chat token server listening on port 3001!')
})


require('dotenv').load()

app.get('/token', function (req, res) {
  const token = new AccessToken(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_API_KEY,
    process.env.TWILIO_API_SECRET,
  )

  token.identity = chance.name()
  token.addGrant(new ChatGrant({
    serviceSid: process.env.TWILIO_CHAT_SERVICE_SID
  }))

  res.send({
    identity: token.identity,
    jwt: token.toJwt()
  })
})