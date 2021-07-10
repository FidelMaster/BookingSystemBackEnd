import mongoose, { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const RoleSchema = new mongoose.Schema({
  rol_name: { type: String },
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  actions: [{ type: Schema.Types.ObjectId, ref: 'Action' }],
  created_date: { type: String },
  modified_date: { type: String }
})

RoleSchema.plugin(uniqueValidator, { message: 'Error, expected {VALUE} to be unique.' })
export default RoleSchema

export class UserModel {
  role_name: string
  users: Int32Array
  actions: Int32Array
  created_date: string
  modified_date: string
}
