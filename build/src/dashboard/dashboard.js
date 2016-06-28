System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Dashboard;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Dashboard = (function () {
                function Dashboard() {
                }
                Dashboard.prototype.ngOnInit = function () {
                    //http://marketpa3pne.intengoresearch.com/dashboard/chart
                    debugger;
                    var data = {
                        // A labels array that can contain any sort of values
                        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                        // Our series array that contains series objects or in this case series data arrays
                        series: [
                            [800000, 1200000, 1400000, 1300000],
                            [200000, 400000, 500000, 300000],
                            [100000, 200000, 400000, 600000]
                        ]
                    };
                    var options = {
                        stackBars: true,
                        axisY: {
                            labelInterpolationFnc: function (value) {
                                return (value / 1000) + 'k';
                            }
                        }
                    };
                    // Create a new line chart object where as first parameter we pass in a selector
                    // that is resolving to our chart container element. The Second parameter
                    // is the actual data object.
                    var chart = new Chartist.Bar('.ct-chart', data, options);
                    chart.on('draw', function (data) {
                        if (data.type === 'bar') {
                            data.element.attr({
                                style: 'stroke-width: 30px'
                            });
                        }
                    });
                };
                Dashboard = __decorate([
                    core_1.Component({
                        selector: 'dashboard',
                        templateUrl: 'dashboard/dashboard.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], Dashboard);
                return Dashboard;
            }());
            exports_1("Dashboard", Dashboard);
        }
    }
});
//# sourceMappingURL=dashboard.js.map