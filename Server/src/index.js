const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
const app = express();
const connectDB = require('./db/connectDB');


// Middleware
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true 
}));

connectDB();

app.get('/', (req, res) => {
  res.send('Welcome To Api');
});



// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
