import { UserModel } from '../../models/user'

export interface GetUserModel {
  first_name: string
  last_name: string
  email: string
  password: string
  role: Int32Array
  request: Int32Array
  created_date: string
  modified_date: string
}

export interface GetUser {
  get: (user: GetUserModel) => Promise<UserModel>
}

export interface GetOneUser{
  getOne: (user: GetUserModel) => Promise<UserModel>
}
