import mongoose, { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const UserSchema = new mongoose.Schema({
  first_name: { type: String },
  last_name: { type: String },
  email: { type: String },
  password: { type: String },
  rol: { type: Schema.Types.ObjectId, ref: 'Rol' },
  requests: [{ type: Schema.Types.ObjectId, ref: 'Request' }],
  created_date: { type: String },
  modified_date: { type: String }
})

UserSchema.plugin(uniqueValidator, { message: 'Error, expected {VALUE} to be unique.' })
export default UserSchema

export class UserModel {
  first_name: string
  last_name: string
  email: string
  password: string
  rol: Int32Array
  request: Int32Array
  created_date: string
  modified_date: string
}
