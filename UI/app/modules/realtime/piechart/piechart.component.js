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
var tracking_service_1 = require("./../../../services/tracking/tracking.service");
var PiechartComponent = (function () {
    function PiechartComponent(_trackingService) {
        this._trackingService = _trackingService;
        this.buildChart = function (a, b) {
            var width = $(".piechart").width();
            this.options = {
                title: { text: 'Tracking Prediction Result' },
                subtitle: {
                    text: 'Start time: ... to ' + String(new Date())
                },
                chart: {
                    type: 'pie',
                    width: width
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                        }
                    }
                },
                series: [{
                        name: 'Count',
                        data: [{
                                name: 'False',
                                y: a
                            }, {
                                name: 'True',
                                y: b
                            }]
                    }]
            };
        };
    }
    PiechartComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._trackingService.getAccuracy().subscribe(function (data) { return _this.filter(data); }, function (error) { return console.log("Error HTTP Post Service"); });
    };
    PiechartComponent.prototype.filter = function (data) {
        var T = 0;
        var F = 0;
        for (var i = 0; i < data.length; i++) {
            if (data[i].para == 'TP' || data[i].para == 'TN') {
                T = T + data[i].count;
            }
            if (data[i].para == 'FP' || data[i].para == 'FN') {
                F = F + data[i].count;
            }
        }
        this.buildChart(F, T);
    };
    return PiechartComponent;
}());
PiechartComponent = __decorate([
    core_1.Component({
        selector: 'piechart',
        templateUrl: 'app/modules/realtime/piechart/piechart.component.html',
        styleUrls: ['app/public/css/realtime.css']
    }),
    __metadata("design:paramtypes", [tracking_service_1.TrackingService])
], PiechartComponent);
exports.PiechartComponent = PiechartComponent;
//# sourceMappingURL=piechart.component.js.map