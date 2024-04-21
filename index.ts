import express from 'express';
import client from './database/db';
import User from './models/user.model';
import userRouter from './routes/user.route';

const app = express();
const port = 8080;

app.use(express.json());

client
    .connect()
    .then(() => {
        console.log('Connected to PostgreSQL database');
    })
    .catch((err) => {
        console.error('Error connecting to PostgreSQL database', err);
    });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

User.sync({ force: true })
    .then(() => {
        console.log('User table created successfully');
    })
    .catch((error) => {
        console.error('Error creating User table:', error);
    });

app.use(userRouter)