"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.AppController = void 0;
var common_1 = require("@nestjs/common");
var token_1 = require("./token");
var AppController = /** @class */ (function () {
    function AppController(appService, UserService, userInactivity, configSmtp, configDB, userService2) {
        this.appService = appService;
        this.UserService = UserService;
        this.userInactivity = userInactivity;
        this.configSmtp = configSmtp;
        this.configDB = configDB;
        this.userService2 = userService2;
    }
    AppController.prototype.getHello = function () {
        //return this.appService.getHello();
        //return this.UserService.getAll().join(',') + ' : ' + this.userInactivity;
        //return this.configSmtp.host +  ' : ' +  this.configSmtp
        //return this.configDB.getHost() + ' : ' + this.configDB.getPort();
        console.log(this.userService2.getAll());
        return this.configDB.connect();
    };
    __decorate([
        (0, common_1.Get)()
    ], AppController.prototype, "getHello");
    AppController = __decorate([
        (0, common_1.Controller)() // si no se pone nombre, el endpoint es la raiz
        ,
        __param(1, (0, common_1.Inject)(token_1.USER_SERVICE_TOKEN)),
        __param(2, (0, common_1.Inject)('USER_INACTIVITY')),
        __param(3, (0, common_1.Inject)('CONFIG_SMTP')),
        __param(4, (0, common_1.Inject)('CONFIG_DB'))
    ], AppController);
    return AppController;
}());
exports.AppController = AppController;
