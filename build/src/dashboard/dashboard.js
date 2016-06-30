System.register(['angular2/core', 'angular2/platform/browser', 'rxjs/Rx', 'angular2/http', 'charts/chart'], function(exports_1, context_1) {
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
    var core_1, browser_1, http_1, chart_1;
    var Dashboard;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (_1) {},
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (chart_1_1) {
                chart_1 = chart_1_1;
            }],
        execute: function() {
            //TODO: Make this the main component - aka remove the main componenet and have this as the top level component.
            Dashboard = (function () {
                function Dashboard(http) {
                    var _this = this;
                    this.http = http;
                    var observable = this.http.get('http://marketpa3pne.intengoresearch.com/dashboard/chart').map(function (resp) {
                        return resp.json();
                    }).subscribe(function (resp) { return _this.data = resp; });
                }
                Dashboard.prototype.ngOnInit = function () { };
                Dashboard = __decorate([
                    core_1.Component({
                        selector: 'dashboard',
                        providers: [http_1.HTTP_PROVIDERS],
                        output: ['data', 'dataEvent']
                    }),
                    core_1.View({
                        directives: [chart_1.Chart],
                        templateUrl: 'dashboard/dashboard.html'
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], Dashboard);
                return Dashboard;
            }());
            exports_1("Dashboard", Dashboard);
            browser_1.bootstrap(Dashboard, [http_1.HTTP_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=dashboard.js.map