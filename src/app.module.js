'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
exports.__esModule = true;
exports.AppModule = exports.DatabaseOracle = exports.Database = void 0;
var common_1 = require('@nestjs/common');
var app_controller_1 = require('./app.controller');
var app_service_1 = require('./app.service');
var user_service_1 = require('./user.service');
var token_1 = require('./token');
var user_module_1 = require('./user/user.module');
var Database = /** @class */ (function () {
  function Database() {}
  Database.prototype.getHost = function () {
    return 'localhost';
  };
  Database.prototype.getPort = function () {
    return 27017;
  };
  Database.prototype.connect = function () {
    return 'connected to database Mysql';
  };
  return Database;
})();
exports.Database = Database;
var DatabaseOracle = /** @class */ (function () {
  function DatabaseOracle() {}
  DatabaseOracle.prototype.getHost = function () {
    return 'localhost';
  };
  DatabaseOracle.prototype.getPort = function () {
    return 27017;
  };
  DatabaseOracle.prototype.connect = function () {
    return 'connected to database Oracle';
  };
  return DatabaseOracle;
})();
exports.DatabaseOracle = DatabaseOracle;
var AppModule = /** @class */ (function () {
  function AppModule() {}
  AppModule = __decorate(
    [
      (0, common_1.Module)({
        imports: [user_module_1.UserModule],
        controllers: [app_controller_1.AppController],
        providers: [
          app_service_1.AppService,
          user_service_1.UserService,
          // { provide: UserService, useClass: UserService }, // cuando tienes un provide que coincide con el nombre de la clase, se puede colocar de manera directa
          {
            provide: token_1.USER_SERVICE_TOKEN,
            useClass: user_service_1.UserService,
          },
          { provide: 'USER_INACTIVITY', useValue: 1000 },
          {
            provide: 'CONFIG_SMTP',
            useValue: { host: 'smtp.gmail.com', port: 587, user: 'arturoB' },
          },
          { provide: 'DATABASE_TYPE', useValue: 'oracle' },
          {
            provide: 'CONFIG_DB',
            useFactory: function (databaseType) {
              if (databaseType === 'mysql') {
                return new Database();
              } else if (databaseType === 'oracle') {
                return new DatabaseOracle();
              }
            },
            inject: ['DATABASE_TYPE'],
          }, //usefactory permite meter parámetros
        ],
      }), // estos son providers
    ],
    AppModule,
  );
  return AppModule;
})();
exports.AppModule = AppModule;
//nota como haz creado un controller (user.controller; te das cuenta qe es un controller porque tiene el decorador @controller ), lo haz unido con un modulo en user.module en controllers, y luego dicho module (ese module se crea con el decorador @module)lo has metido en app.module a travès de imports
