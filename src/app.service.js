"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppService = void 0;
var common_1 = require("@nestjs/common");
var AppService = /** @class */ (function () {
    function AppService() {
    }
    AppService.prototype.getHello = function () {
        return 'Hello World!';
    };
    AppService = __decorate([
        (0, common_1.Injectable)()
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
/* este es un servicio, y es inyectable. Nota que es una clase, la cual exportas

In NestJS, a service is a class that
 provides a specific set of related functions and is
  typically used to encapsulate business logic and
  interact with external systems or resources.
  Services are a key component of the NestJS
  framework and are used to organize and share
   reusable functionality across your application.
   They are typically injected into controllers and
   other components via dependency injection, allowing for
   loose coupling and easier testing and maintenance.
    Services can also be decorated with various NestJS
     decorators to add additional functionality, such
      as logging or error handling.

*/
