const express = require('express');
const helmet = require('helmet');
const xss = require('xss-clean');
const compression = require('compression');
const cors = require('cors');
const httpStatus = require('http-status');

const app = express();
const PORT = 1802;

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data
app.use(xss());

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options('*', cors());

// v1 api routes
app.get('/v1/leads', (req, res) => {
    res.json({
        success: true,
        message: "Testing API.",
        data: [{
            name: "Huzefa Ratlamwala",
            email: "mfl01066@futuregenerali.in",
            username: "MFL01066"
        }, {
            name: "Sarthak Khandelwal",
            email: "mfl01066@futuregenerali.in",
            username: "MFL01066"
        }, {
            name: "Sai Meher",
            email: "mfl01066@futuregenerali.in",
            username: "MFL01066"
        }]
    })
});

// // send back a 404 error for any unknown api request
// app.use((req, res, next) => {
//   next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
// });

app.listen(PORT, () => {
    console.log(`Server listening to port ${PORT}`);
});