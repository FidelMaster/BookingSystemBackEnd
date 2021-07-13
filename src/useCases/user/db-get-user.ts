import { GetUserModel, GetUser, GetOneUser } from '../../domain/useCases/user/get-user'

export class GetUserAccount implements GetUser {
  async get (usersAccount: GetUserModel): Promise<GetUserModel> {
    return new Promise(resolve => resolve(
      usersAccount
    ))
  }
}

export class GetOneUserAccount implements GetOneUser {
  async getOne (userAccount: GetUserModel): Promise<GetUserModel> {
    return new Promise(resolve => resolve(
      userAccount
    ))
  }
}
