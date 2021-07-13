import mongoose, { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'
import ActionSchema from './action'

const RoleSchema = new mongoose.Schema({
  rol_name: { type: String },
  actions: [ActionSchema],
  created_date: { type: String },
  modified_date: { type: String }
})

RoleSchema.plugin(uniqueValidator, { message: 'Error, expected {VALUE} to be unique.' })
export default RoleSchema

export class RoleModel {
  role_name: string
  actions: Int32Array
  created_date: string
  modified_date: string
}
