const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname,'uploads')));

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/unimanage', { useNewUrlParser:true, useUnifiedTopology:true })
  .then(()=>console.log("MongoDB connected"))
  .catch(err=>console.log(err));

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/notes', require('./routes/notesRoutes'));
app.use('/api/pyqs', require('./routes/pyqRoutes'));
app.use('/api/solutions', require('./routes/solutionRoutes'));
app.use('/api/faculty', require('./routes/facultyRoutes'));
app.use('/api/students', require('./routes/studentRoutes'));
app.use('/api/notices', require('./routes/noticeRoutes'));
app.use('/api/routines', require('./routes/routineRoutes'));
app.use('/api/bus', require('./routes/busRoutes'));
app.use('/api/alumni', require('./routes/alumniRoutes'));
app.use('/api/feedback', require('./routes/feedbackRoutes'));

const PORT = 5000;
app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));
