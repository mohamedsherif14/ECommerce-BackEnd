const express = require('express');
const dotEnv = require('dotenv');
dotEnv.config();

const connectDB = require('./Confg/db.confg');
connectDB();
const port = process.env.PORT;
const app = express()

app.listen(port , _=>console.log(`server started port:${port}`));