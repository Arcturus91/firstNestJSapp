"use strict";
exports.__esModule = true;
exports.UserService = void 0;
var UserService = /** @class */ (function () {
    function UserService() {
    }
    //siempre debes exportarlo
    UserService.prototype.getAll = function () {
        return ['user1', 'user2', 'user3'];
    };
    return UserService;
}());
exports.UserService = UserService;
