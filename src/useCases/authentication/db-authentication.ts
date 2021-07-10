import { Authentication } from '../../domain/useCases/authentication'
import UserService from '../../services/userService'
import { UserModel } from '../../domain/models/user'
import { AuthenticationToken } from '../../presentation/interfaces/jwt-token'

export class Dbauth implements Authentication {
  constructor (private readonly authenticationToken: AuthenticationToken) {
    this.authenticationToken = authenticationToken
  }

  async auth (email: string, password: string): Promise<UserModel> {
    try {
      const userDB: any = await UserService.getOne(email)
      const User: any = {
        id: userDB._id,
        name: userDB.name,
        email: userDB.email,
        role: userDB.role
      }

      const token = await this.authenticationToken.token(userDB)

      if (!token) {
        throw Error('No exist token.')
      }

      const newUser: any = {
        User,
        token
      }
      return newUser
    } catch (error) {
      console.log(error)
      return error.message
    }
  }
}
