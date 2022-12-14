import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user.service';
import { USER_SERVICE_TOKEN } from './token';
import { UserModule } from './user/user.module';
import { UserInfrastructure } from './user/infrastructure/user.infrastructure';
import { UserApplication } from './user/application/user.application';

export class Database {
  getHost() {
    return 'localhost';
  }

  getPort() {
    return 27017;
  }
  connect() {
    return 'connected to database Mysql';
  }
}

export class DatabaseOracle {
  getHost() {
    return 'localhost';
  }

  getPort() {
    return 27017;
  }
  connect() {
    return 'connected to database Oracle';
  }
}

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [
    AppService,
    UserService, //solo aplicable con useClass
    // { provide: UserService, useClass: UserService }, // cuando tienes un provide que coincide con el nombre de la clase, se puede colocar de manera directa
    //{ provide: UserInfrastructure, useClass: UserInfrastructure },
   // UserInfrastructure, se saca de aquí porque nest me está pidiendo que esté en los imports de los módulos
   // UserApplication, similar que el de arriba
    { provide: USER_SERVICE_TOKEN, useClass: UserService },
    { provide: 'USER_INACTIVITY', useValue: 1000 },
    {
      provide: 'CONFIG_SMTP',
      useValue: { host: 'smtp.gmail.com', port: 587, user: 'arturoB' },
    },

    { provide: 'DATABASE_TYPE', useValue: 'oracle' },
    {
      provide: 'CONFIG_DB',
      useFactory: (databaseType) => {
        if (databaseType === 'mysql') {
          return new Database();
        } else if (databaseType === 'oracle') {
          return new DatabaseOracle();
        }
      },
      inject: ['DATABASE_TYPE'],
    }, //usefactory permite meter parámetros
  ], //tokens o identificadores
}) // estos son providers
export class AppModule {}

//nota como haz creado un controller (user.controller; te das cuenta qe es un controller porque tiene el decorador @controller ), lo haz unido con un modulo en user.module en controllers, y luego dicho module (ese module se crea con el decorador @module)lo has metido en app.module a travès de imports
