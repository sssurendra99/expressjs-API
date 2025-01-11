import express from 'express';
import morgan from 'morgan'
import bodyParser from 'body-parser';
import books from '../routes/book';

export const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// Adding logging behaviour.
app.use(morgan('combined'))

app.use('/api/books', books)