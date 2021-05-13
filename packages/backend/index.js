const config = require('@spotify-clone/config');
const SpotifyWebApi = require('spotify-web-api-node');
const app = require('express')();

app.post('/login', (req, res) => {
  // Get code from body
  const {code} = req.body;

  // Create a new spotify API object
  const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:3000',
    clientId: config.clientId,
    clientSecret: config.clientSecret,
  })

  // Request an auth code, based on user code
  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
      console.error(error)
    })
})
