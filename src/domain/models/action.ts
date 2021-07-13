import mongoose, { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const ActionSchema = new mongoose.Schema({
  action_name: { type: String },
  end_point: { type: String },
  created_date: { type: String },
  modified_date: { type: String }
})

ActionSchema.plugin(uniqueValidator, { message: 'Error, expected {VALUE} to be unique.' })
export default ActionSchema

export class ActionModel {
  action_name: string
  end_point: string
  created_date: string
  modified_date: string
}
