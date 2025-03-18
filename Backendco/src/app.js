const express = require("express");
const cors = require("cors");
const bodyparser = require('body-parser')
const userRoute= require('./routes/userRoute')
const productRouter = require('./routes/ProductRoute')

const app = express();


// Middleware
app.use(express.json());
app.use(cors());

app.use(bodyparser.json())



// Routes
app.use('/auth',userRoute)
app.use('/products',productRouter)




module.exports = app;
