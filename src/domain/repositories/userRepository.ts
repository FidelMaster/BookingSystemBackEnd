import mongoose from 'mongoose'
import UserSchema from '../models/user'

export default mongoose.model('User', UserSchema)
