'use strict';
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
exports.serverUrl = 'http://localhost:3003/';
exports.socketUrl = 'http://localhost:3004/';
exports.requestOptions = new http_1.RequestOptions({ headers: headers, method: "post" });
exports.handleError = function (error) {
    return Rx_1.Observable.throw(error.json().error || ' error');
};
//# sourceMappingURL=globals.js.map