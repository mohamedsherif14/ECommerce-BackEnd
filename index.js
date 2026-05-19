const express = require('express');
const dotEnv = require('dotenv');
dotEnv.config();
const ErrorHandler = require('./middlewares/errorHandler.middlewaere')
const userRoute = require('./routes/user.route')
const authRoute = require('./routes/auth.route')

const connectDB = require('./Confg/db.confg');
connectDB();
const port = process.env.PORT;
const app = express()

app.use(express.json())
app.use('/api/user' , userRoute)
app.use('/api/auth' ,authRoute)


app.use(ErrorHandler)
app.listen(port , _=>console.log(`server started port:${port}`));