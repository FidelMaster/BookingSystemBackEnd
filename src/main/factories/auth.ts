import { EmailValidatorAdapter } from '../../utils-adapters/email-validator-adapter'
import { LoginController } from '../../presentation/controllers/auth/auth'
import { Dbauth } from '../../useCases/authentication/db-authentication'
import { DcryptAdapter } from '../../utils-adapters/bcrypt-adapter'
import { JwtAdapter } from '../../utils-adapters/jwt-adapter'

export const makeLoginController = (): LoginController => {
  const jwtAdapter = new JwtAdapter(process.env.SEED, process.env.EXPIRES_IN)
  const dbauth = new Dbauth(jwtAdapter)
  const emailValidatorAdapter = new EmailValidatorAdapter()
  const dcryptAdapter = new DcryptAdapter()
  const loginController = new LoginController(emailValidatorAdapter, dbauth, dcryptAdapter)
  return loginController
}
