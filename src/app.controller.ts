import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user.service';
import { USER_SERVICE_TOKEN } from './token';
import { Database } from './app.module';

@Controller() // si no se pone nombre, el endpoint es la raiz
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject(USER_SERVICE_TOKEN) private UserService: UserService,
    @Inject('USER_INACTIVITY') private userInactivity: number,
    @Inject('CONFIG_SMTP') private configSmtp: any,
    @Inject('CONFIG_DB') private configDB: any,
    private readonly userService2: UserService,
  ) {}

  @Get()
  getHello(): string {
    //return this.appService.getHello();
    //return this.UserService.getAll().join(',') + ' : ' + this.userInactivity;
    //return this.configSmtp.host +  ' : ' +  this.configSmtp
    //return this.configDB.getHost() + ' : ' + this.configDB.getPort();
    console.log(this.userService2.getAll());
    return this.configDB.connect();
  }
}
