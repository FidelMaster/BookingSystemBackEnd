import { Router } from 'express'
import { AdaptRoute } from '../adapters/express-route-adapter'
import { makeLoginController } from '../factories/auth'

export default (router: Router): void => {
  router.post('/login', AdaptRoute(makeLoginController()))
}
