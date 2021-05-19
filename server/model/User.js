let mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  email: {
    type: String, 
    required: [true, "Campo obrigatório"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String, 
    required: [true, "Campo obrigatório"]
  }
}, {timestamps: true});

UserSchema.pre('save', async function(next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

module.exports = mongoose.model('User', UserSchema);