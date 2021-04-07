import express from 'express';
import mongoose from 'mongoose';
import config from './config/index.js';
import hpp from 'hpp';
import helmet from 'helmet';
import cors from 'cors';

import userRoutes from './routes/api/user.js';
import authRoutes from './routes/api/auth.js';
import memberRoutes from './routes/api/member.js';
import inquiriesRoutes from './routes/api/inquiries.js';

import morgan from 'morgan';

const app = express();
const { MONGO_URI } = config;

app.use(hpp());
app.use(helmet());

app.use(cors({ origin: true, credentials: true }));
app.use(morgan('dev')); //개발 log을 보여줌

app.use(express.json());

mongoose
    .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => console.log('MongoDB connection Success'))
    .catch((e) => console.log(e));

app.get('/');
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/member', memberRoutes);
app.use('/api/inquiries', inquiriesRoutes);

export default app;
