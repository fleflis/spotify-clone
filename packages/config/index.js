require('dotenv').config();

module.exports = {
  port: '3000',
  clientId: process.env.SPOTIFY_CLIENT_ID || '',
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET || '',
};
