/* const express = require('express');
const server = express();
 */
const { conn } = require('./DB_connection')
const PORT = 3001;
const app = require("./app.js")


conn.sync({ force: true }).then(() => {
   app.listen(PORT, (req, res) => {
      console.log('Server raised in port ' + PORT);
   });
})

