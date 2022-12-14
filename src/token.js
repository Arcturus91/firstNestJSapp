"use strict";
exports.__esModule = true;
exports.USER_SERVICE_TOKEN = void 0;
var inject_token_1 = require("./inject-token");
var USER_SERVICE_TOKEN = function () { return new inject_token_1.InjectToken('USER_SERVICE'); };
exports.USER_SERVICE_TOKEN = USER_SERVICE_TOKEN;
