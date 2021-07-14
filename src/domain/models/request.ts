import mongoose, { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'


const RequestSchema = new mongoose.Schema({
  location: { type: String }
  isActive: { type: Boolean},
  user: { type: String },
  state_name: { type: String },
  created_date: { type: String },
  modified_date: { type: String }
})

RequestSchema.plugin(uniqueValidator, { message: 'Error, expected {VALUE} to be unique.' })
export default RequestSchema

export class RequestModel {
  state_name: string
  created_date: string
  modified_date: string
}
