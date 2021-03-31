const express = require('express');
require('dotenv').config();
const connectDB = require('./db/db');
var cors = require('cors');
const path = require('path');

const app = express();

//connect Database
connectDB();

//To Access api from other port no.
app.use(cors());

//Init Middleware
app.use(express.json({ extended: false }));

//Define Routes
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));

//app.get("/", (req, res) => res.send("api Running"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
