import { RoleModel } from '../domain/models/role'
import RolRepository from '../domain/repositories/rolRepository'

class RolService {
  async verifyRolAction (id, endPoint) {
    return RolRepository.find({ _id: id,'actions.end_point': endPoint })
  }
}

export default new RolService()
