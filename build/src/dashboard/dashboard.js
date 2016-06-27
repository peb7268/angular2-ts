System.register("dashboard", ["angular2/core"], function ($__export) {
    "use strict";
    var Component, View, Dashboard;
    return {
        setters: [function ($__m) {
                Component = $__m.Component;
                View = $__m.View;
            }],
        execute: function () {
            Dashboard = function () {
                function Dashboard() {
                    console.info('Dashboard Component Mounted Successfully');
                }
                return ($traceurRuntime.createClass)(Dashboard, {}, {});
            }();
            $__export("Dashboard", Dashboard);
            Object.defineProperty(Dashboard, "annotations", { get: function () {
                    return [new Component({ selector: 'dashboard' }), new View({ templateUrl: 'dashboard/dashboard.html' })];
                } });
        }
    };
});
//# sourceMappingURL=dashboard.js.map