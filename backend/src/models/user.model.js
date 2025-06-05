const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true
  },
  role: {
    type: String,
    required: [true, 'Title / Role is required'],
    trim: true
  },
  photo: {
    type: String, 
    default : "https://img.freepik.com/premium-photo/user-icon-person-symbol-human-avatar-3d-render_473931-217.jpg?w=740",
    trim: true
  },
  linkedin: {
    type: String,
    trim: true,
    validate: {
      validator: function(v) {
        return !v || /^https:\/\/(www\.)?linkedin\.com\/.*$/.test(v);
      },
      message: props => `${props.value} is not a valid LinkedIn URL`
    }
  },
  twitter: {
    type: String,
    trim: true,
    validate: {
      validator: function(v) {
        return !v || /^https:\/\/(www\.)?twitter\.com\/.*$/.test(v);
      },
      message: props => `${props.value} is not a valid Twitter URL`
    }
  }
}, {
  timestamps: true
});

const UserProfile = mongoose.model('UserProfile', userProfileSchema);

module.exports = UserProfile;