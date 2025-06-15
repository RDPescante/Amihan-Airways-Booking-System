const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Routes
const flightRoutes = require('./routes/flightRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
    origin: ['http://localhost:3000', 'http://localhost:4000'],
    credentials: true,
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

mongoose.connect(process.env.MONGODB_STRING)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error(err));

// Routes
app.use("/flights", flightRoutes);

app.use(require('./auth').errorHandler); // Error handler

if(require.main === module) {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`API is online on port ${process.env.PORT || 3000}`);
    });
}

module.exports = { app, mongoose };