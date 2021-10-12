import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: String,
  email: String
})

export default module.exports = mongoose.models.User || mongoose.model('User', UserSchema)