import { Module } from '@nestjs/common'; // decorador qe recibe como parámetro un JSON
import { UserApplication } from './application/user.application';

import { UserInfrastructure } from './infrastructure/user.infrastructure';
import { UserController } from './interfaces/http/user.controller';

@Module({
  imports: [],
  controllers: [UserController], // para vincular la propiedad controller con un módulo, usa la propiedad Controller
  providers: [UserApplication, UserInfrastructure],
})
export class UserModule {}

//los modulos son clases
// para vincular un módulo con otro módulo, usa la propiedad Imports
