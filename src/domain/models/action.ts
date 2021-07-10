import mongoose, { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const ActionSchema = new mongoose.Schema({
  action_name: { type: String },
  controller_name: { type: String },
  end_point: { type: String },
  roles: [{ type: Schema.Types.ObjectId, ref: 'Rol' }],
  created_date: { type: String },
  modified_date: { type: String }
})

ActionSchema.plugin(uniqueValidator, { message: 'Error, expected {VALUE} to be unique.' })
export default ActionSchema

export class ActionModel {
  action_name: string
  controller_name: string
  end_point: string
  roles: Int32Array
  created_date: string
  modified_date: string
}
