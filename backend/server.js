const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const appointmentRoutes = require('./routes/appointmentRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);
app.use('/api/v1', appointmentRoutes);
app.use(errorHandler);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((error) => console.error('MongoDB connection failed:', error.message));

app.listen(5000, () => console.log('Server running on port 5000'));
