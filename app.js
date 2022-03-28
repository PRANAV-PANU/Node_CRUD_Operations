/* eslint-disable no-unused-vars */
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const router = require('./routes/routing.js');

const app  = express();
const port = 3000;

app.use(cors());
app.use(bodyparser.json());
app.use('/',router);
// app.get('/',(req,res)=>{
//   console.log("[Test");
//   res.send("Hello from server");
// });
app.listen(port,()=>{
  console.log('App running on port 3000');
});
