import { UserModel } from '../../models/user'

export interface AddUserModel {
  first_name: string
  last_name: string
  email: string
  password: string
  role: Int32Array
  request: Int32Array
  created_date: string
  modified_date: string
}

export interface AddUser {
  add: (user: AddUserModel) => Promise<UserModel>
}
