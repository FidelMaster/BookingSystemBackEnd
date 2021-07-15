import mongoose, { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const RequestStateSchema = new mongoose.Schema({
  state_name: { type: String },
  created_date: { type: String },
  modified_date: { type: String }
})

RequestStateSchema.plugin(uniqueValidator, { message: 'Error, expected {VALUE} to be unique.' })
export default RequestStateSchema

export class RequestStateModel {
  state_name: string
  created_date: string
  modified_date: string
}
