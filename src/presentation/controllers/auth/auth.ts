import { HttpRequest, HttpResponse, Controller, EmailValidator } from './auth-protocols'
import { InvalidParamError, MissingParamError, NoReadyExist, ServerError } from '../../errors'
import { badRequest, notFound, serverError, success } from '../../helpers/http-helper'
import { Authentication } from '../../../domain/useCases/authentication'
import UserService from '../../../services/userService'
import { Dcryptography } from '../../../infraestructure/cryptgraphy/encryper'

export class LoginController implements Controller {
  constructor (private readonly emailValidator: EmailValidator,
    private readonly authentication: Authentication,
    private readonly dcryptgraphy: Dcryptography) {
    this.emailValidator = emailValidator
    this.authentication = authentication
    this.dcryptgraphy = dcryptgraphy
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredField = ['email', 'password']
      for (const field of requiredField) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }

      const user: { email, password } = httpRequest.body

      const isEmailValid = this.emailValidator.isValid(user.email)
      if (!isEmailValid) {
        return badRequest(new InvalidParamError('email'))
      }
      const account: any = await UserService.getOne(user.email)

      if (!account) {
        return notFound(`${user.email}`)
      }
      const passwordDcrypt = await this.dcryptgraphy.dencrypt(user.password, account.password_hash)
      if (passwordDcrypt === false) {
        return badRequest(new NoReadyExist('Error of Authentication'))
      }
      if (!passwordDcrypt) {
        throw Error('Error in dcrypt')
      }
      const userAuth = await this.authentication.auth(user.email, user.password)
      return success(userAuth)
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}
