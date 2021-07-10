import { UserModel } from '../models/user'

export interface Authentication {
  auth: (email: string, password?: string) => Promise<UserModel>
}
