import { Inject } from '@nestjs/common';
import { UserModel } from '../domain/models/user.model';
import { UserRepository } from '../domain/repositories/user.repository';
import { UserInfrastructure } from '../infrastructure/user.infrastructure';

export class UserApplication {
  constructor(
    @Inject(UserInfrastructure) private userRepository: UserRepository,
  ) {} //aqui yo inyecto una clase        aqui yo inyecto un repositorio que está en la capa de dominio. Si yo colocara un use.Infrastructure directamente, entonces yo tendría contacto con lo qe se le conecta desde afuera y eso está mal.

  async getAll(): Promise<UserModel[]> {
    const users = await this.userRepository.getAll();
    
    return users;
  }
}

//yo no debo poder ver la infrastructura. no debo ver lo qe está afuera del aplication.
