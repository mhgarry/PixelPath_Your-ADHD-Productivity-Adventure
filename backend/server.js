const express = require('express');
const sequelize = require('./config/database');
const routes = require('./routes');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', routes);

const PORT = process.env.PORT || 8080;

sequelize
  .sync()
  .then(() => {
    console.log('Database synced');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
