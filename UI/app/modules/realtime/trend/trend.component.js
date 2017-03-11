"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var trend_service_1 = require("./../../../services/trend/trend.service");
var socket_service_1 = require("./../../../services/socket/socket.service");
var TrendComponent = (function () {
    function TrendComponent(_trendService, _singletonSocket) {
        this._trendService = _trendService;
        this._singletonSocket = _singletonSocket;
        this.time = null;
        this.value = null;
        this.proba = null;
    }
    TrendComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._trendService.trend().subscribe(function (data) { return _this.filter(data); }, function (error) { return console.log("Error HTTP Post Service"); });
        var self = this;
        this._singletonSocket.getDataFromSocket('prediction', function (re) {
            self.filter(re);
        });
    };
    TrendComponent.prototype.filter = function (data) {
        this.time = new Date(data.time);
        this.value = data.value == 0 ? 'Down' : 'Up';
        this.proba = data.proba * 100;
    };
    return TrendComponent;
}());
TrendComponent = __decorate([
    core_1.Component({
        selector: 'trend',
        templateUrl: 'app/modules/realtime/trend/trend.component.html',
        styleUrls: ['app/public/css/realtime.css']
    }),
    __metadata("design:paramtypes", [trend_service_1.TrendService, socket_service_1.SingletonSocket])
], TrendComponent);
exports.TrendComponent = TrendComponent;
//# sourceMappingURL=trend.component.js.map