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
var StackChartComponent = (function () {
    function StackChartComponent(_trackingService) {
        this._trackingService = _trackingService;
    }
    StackChartComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._trackingService.getAccuracy().subscribe(function (data) { return _this.filter(data); }, function (error) { return console.log("Error HTTP Post Service"); });
    };
    StackChartComponent.prototype.filter = function (data) {
        var TP = 0;
        var TN = 0;
        var FP = 0;
        var FN = 0;
        for (var i = 0; i < data.length; i++) {
            if (data[i].para == 'TP') {
                TP = data[i].count;
            }
            if (data[i].para == 'TN') {
                TN = data[i].count;
            }
            if (data[i].para == 'FP') {
                FP = data[i].count;
            }
            if (data[i].para == 'FN') {
                FN = data[i].count;
            }
        }
        this.buildChart(FP, TP, FN, TN);
    };
    StackChartComponent.prototype.buildChart = function (fu, tu, fd, td) {
        var width = $(".stackchart").width();
        this.options = {
            title: { text: 'Tracking Prediction Result' },
            subtitle: {
                text: 'Start time: ... to ' + String(new Date())
            },
            chart: {
                type: 'column',
                width: width
            },
            yAxis: {
                allowDecimals: false,
                title: {
                    text: 'Times'
                },
            },
            tooltip: {
                formatter: function () {
                    return this.series.name + ': ' + this.y + '<br/>' + 'Total: ' + this.point.stackTotal;
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal'
                }
            },
            series: [{
                    name: 'False Up',
                    data: [fu],
                    stack: 'up'
                }, {
                    name: 'True Up',
                    data: [tu],
                    stack: 'up'
                }, {
                    name: 'False Down',
                    data: [fd],
                    stack: 'down'
                }, {
                    name: 'True Down',
                    data: [td],
                    stack: 'down'
                }]
        };
    };
    return StackChartComponent;
}());
StackChartComponent = __decorate([
    core_1.Component({
        selector: 'stackchart',
        templateUrl: 'app/modules/realtime/stackchart/stackchart.component.html',
        styleUrls: ['app/public/css/realtime.css']
    }),
    __metadata("design:paramtypes", [tracking_service_1.TrackingService])
], StackChartComponent);
exports.StackChartComponent = StackChartComponent;
//# sourceMappingURL=stackchart.component.js.map