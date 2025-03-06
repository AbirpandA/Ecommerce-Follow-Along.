const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyparser = require('body-parser')
const userRouter= require('./routes/userRoute')
const productRouter = require('./routes/ProductRoute')

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

app.use(bodyparser.json())



// Routes
app.use('/auth',userRouter)
app.use('/products',productRouter)




module.exports = app;
