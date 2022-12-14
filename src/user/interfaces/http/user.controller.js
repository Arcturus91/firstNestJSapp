"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserController = void 0;
var common_1 = require("@nestjs/common");
var UserController = /** @class */ (function () {
    //el user es la ruta
    //si no le pones nada significa que es la raiz
    function UserController() {
    }
    UserController.prototype.getAll = function () {
        //por defecto responde con el objeto response.
        return ['user1', 'user2', 'user3', 'user4'];
    };
    __decorate([
        (0, common_1.Get)()
    ], UserController.prototype, "getAll");
    UserController = __decorate([
        (0, common_1.Controller)('user') //es una función que devuelve un controlador.
        //el user es la ruta
        //si no le pones nada significa que es la raiz
    ], UserController);
    return UserController;
}());
exports.UserController = UserController;
