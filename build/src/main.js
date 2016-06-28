System.register(['angular2/core', 'angular2/platform/browser', 'dashboard/dashboard'], function(exports_1, context_1) {
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
    var core_1, browser_1, dashboard_1;
    var Main;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (dashboard_1_1) {
                dashboard_1 = dashboard_1_1;
            }],
        execute: function() {
            Main = (function () {
                function Main() {
                }
                Main = __decorate([
                    core_1.Component({
                        selector: 'main',
                    }),
                    core_1.View({
                        directives: [dashboard_1.Dashboard],
                        template: "\n    <dashboard></dashboard>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Main);
                return Main;
            }());
            exports_1("Main", Main);
            browser_1.bootstrap(Main);
        }
    }
});
// System.register("main", ["angular2/core", "angular2/platform/browser", "dashboard"],
//   function($__export) {
//
//   "use strict";
//   var Component,
//       View,
//       bootstrap,
//       Dashboard,
//       Main;
//   return {
//     setters: [function($__m) {
//       Component = $__m.Component;
//       View = $__m.View;
//     }, function($__m) {
//       bootstrap = $__m.bootstrap;
//     }, function($__m) {
//       Dashboard = $__m.Dashboard;
//     }],
//     execute: function() {
//       Main = function() {
//         function Main() {}
//         return ($traceurRuntime.createClass)(Main, {}, {});
//       }();
//       Object.defineProperty(Main, "annotations", {get: function() {
//           return [new Component({selector: 'main'}), new View({
//             directives: [Dashboard],
//             template: "\n    <dashboard></dashboard>\n  "
//           })];
//         }});
//       bootstrap(Main);
//     }
//   };
// });
//# sourceMappingURL=main.js.map