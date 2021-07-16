import { RoleModel } from '../domain/models/role'
import RolRepository from '../domain/repositories/rolRepository'

class RolService {
  async verifyRolAction (id, endPoint) {
    return RolRepository.find({ _id: id,'actions.end_point': endPoint })
  }

  async create (rol: RoleModel) {
    return RolRepository.create(rol)
  }

  async update (id, rol) {
    return RolRepository.findByIdAndUpdate(id, rol, { new: true, useFindAndModify: true })
  }


}

export default new RolService()
