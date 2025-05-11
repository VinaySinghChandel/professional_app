// require('dotenv').config({path : './env'});

import dotenv from 'dotenv';
import connectDB from './db/index.js';
dotenv.config({path:'./env'});

connectDB().then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server is running at the port : ${process.env.PORT}`);
    })
}).catch((error) => {
    console.log('MongoDB connection failed', error);
});






/* First Approach
import express from 'express';
const app = express();

;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on('error', () => {
            console.log('Error : ', error);
            throw error;
        });
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on the port ${process.env.PORT}`);
        })
    } catch(error) {
        console.log('Error : ', error);
    }
} )();
*/ 