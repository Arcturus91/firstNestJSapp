import { Controller, Get } from '@nestjs/common';
import { UserApplication } from '../../application/user.application';

@Controller('user') //es una función que devuelve un controlador.
//el user es la ruta
//si no le pones nada significa que es la raiz
export class UserController {
  constructor(private readonly userApplication: UserApplication) {}
  //aqui yo estoy haciendo una inyección desde abajo, desde una capa inferior.
  //para que se haga una inyección, hyo necesito haber creado un provider.
  @Get()
  async getAll() {
    //por defecto responde con el objeto response.
    const users = await this.userApplication.getAll();

    return users;
  }
}
