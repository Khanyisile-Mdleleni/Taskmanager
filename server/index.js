const cors = require('cors');
const express = require('express');
const app = express();
require('../database/db');
const authRoutes = require('./routes/authRoutes');
// const morgan = require('morgan');


app.use(cors());
// app.use(morgan('dev'));
// app.use(express.json());
app.use('/auth', authRoutes);



const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})