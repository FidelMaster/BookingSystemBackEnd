import { UserModel } from '../domain/models/user'
import UserRepository from '../domain/repositories/userRepository'

class UserService {
  async get () {
    return UserRepository.find({}, 'first_name last_name email role password created_date')
  }

  async getOne (email: string) {
    return UserRepository.findOne({ email })
  }

  async getById (id: string) {
    return UserRepository.findById(id, 'first_name last_name email role password created_date')
  }

  async create (user: UserModel) {
    return UserRepository.create(user)
  }

  async update (id, user) {
    return UserRepository.findByIdAndUpdate(id, user, { new: true, useFindAndModify: true })
  }

  async delete (id: string) {
    return UserRepository.findByIdAndDelete(id)
  }
}

export default new UserService()
