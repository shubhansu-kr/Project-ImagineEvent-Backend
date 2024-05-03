import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const port = 3000;
import mongoose from 'mongoose';
import router from './routes/route.js';
import cors from 'cors';
// import express from 'express';
import session from 'express-session';
import jwt from 'jsonwebtoken';

const app = express();
app.use(cors());
app.use(express.json());
app.use(session({
    secret: 'Secret_key: skdlfajdlsi32rfw43fwtqrg34trg',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
}));

//changed

import eventRoutes from './routes/eventRoutes.js';

app.use(express.json());

app.use('/', router);
app.use('/login', router);
app.use('/events', eventRoutes);


mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to MongoDB 🥳');
}).catch((err) => {
    console.log(err);
}
);

app.listen(port, () => console.log(`yowamio listening on port ${port}!`));