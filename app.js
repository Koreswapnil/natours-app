const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const morgan = require('morgan');
const userRouter = require('./routes/userRoutes.js');
const tourRouter = require('./routes/tourRoutes.js');

const app = express();

// MIDDLEWARES
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Body parser middleware
app.use(express.json());

app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('Hellow from the middleware 👋');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3. ROUTES
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
