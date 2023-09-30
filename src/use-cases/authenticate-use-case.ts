import { compare } from 'bcryptjs'
import { type responseOngData, type OngsRepository } from '../repositories/interfaces/ong-interface'
import { InvalidCredentialsError } from './erros/invalid-credentials.erro'

interface AuthenticateUseCaseRequest {
  email: string
  password: string
}

interface AuthenticateUseCaseResponse {
  ong: responseOngData
}

export class AuthenticateUseCase {
  constructor (
    private ongRepository: OngsRepository
  ) {}

  async execute ({ email, password }: AuthenticateUseCaseRequest): Promise<AuthenticateUseCaseResponse> {
    const ong = await this.ongRepository.findOngByEmail(email)

    if (!ong) {
      throw new InvalidCredentialsError()
    }

    const doesPasswordMatch = await compare(password, ong.password)

    if (!doesPasswordMatch) {
      throw new InvalidCredentialsError()
    }

    return {
      ong
    }
  }
}
