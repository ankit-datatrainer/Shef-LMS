const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['student', 'instructor', 'admin'],
    default: 'student'
  },
  enrolledCourses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }],
  // IP Address tracking fields
  lastLoginIP: {
    type: String,
    default: null
  },
  lastLoginTimestamp: {
    type: Date,
    default: null
  },
  lastLogin: {
    timestamp: String,
    ipAddress: String,
    city: String,
    country: String,
    isp: String
  },
  loginHistory: [{
    timestamp: Date,
    ipAddress: String,
    city: String,
    country: String,
    isp: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', UserSchema);
