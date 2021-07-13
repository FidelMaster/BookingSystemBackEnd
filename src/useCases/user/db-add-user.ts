import UserService from '../../services/userService'
import { AddUserModel, AddUser } from '../../domain/useCases/user/add-user'
import { Cryptography } from '../../infraestructure/cryptgraphy/encryper'

export class DbAddUser implements AddUser {
  constructor (private readonly cryptgraphy: Cryptography) {
    this.cryptgraphy = cryptgraphy
  }

  async add (user: AddUserModel): Promise<AddUserModel> {
    user.password = await this.cryptgraphy.encrypt(user.password)
    const userDB: any = await UserService.create(user)

    return new Promise(resolve => resolve(
      userDB
    ))
  }
}
