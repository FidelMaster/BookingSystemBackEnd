import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import UserService from '../../services/userService'
import RolService from '../../services/rolService'

export class AuthenticationToken {
  async veryfyToken (req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.header('x-access-token')
      if (!token) {
        return res.status(500).json({
          ok: false,
          message: 'Token is required'
        })
      }

      const user: any = await jwt.verify(token, process.env.SEED)
      req.user = user.user
      const userDB = await UserService.getById(user.user.id)

      if (!userDB) {
        return res.status(401).json({
          ok: false,
          mensaje: {
            mensaje: 'Must be authenticated ADMIN_ ROLE User no exist'
          }
        })
      }
      next()
    } catch (error) {
      if (error) {
        res.status(405).json({
          error
        })
      }
    }
  }

  async veryfyRole_Actions (req: Request, res: Response, next: NextFunction) {
    const rolId = req.user.role
    const endPoint = req.url

    const isAccess = await RolService.verifyRolAction(rolId, endPoint)

    if (isAccess) {
      next()
    } else {
      return res.status(401).json({
        ok: false,
        mensaje: {
          mensaje: 'The user is not authorize for the resources acces'

        }

      })
    }
  }
}

export default new AuthenticationToken()
