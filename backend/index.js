require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require("./routes/auth");
const isAdmin = require('./middlewares/isAdmin')
const eventRoutes = require('./routes/event')
const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');
const protectedRoutes = require("./routes/protected");
const eventRegistrationRoutes = require('./routes/eventRegistrationRoutes');

connectDB();

const app = express();
app.use(cors({
  origin: ["https://event-sphere-coral.vercel.app", "http://localhost:5174"] ,
  credentials: true,
}));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api', protectedRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api',eventRegistrationRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
