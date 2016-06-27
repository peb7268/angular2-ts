System.register("main", ["angular2/core", "angular2/platform/browser", "dashboard"], 
  function($__export) {
    
  "use strict";
  var Component,
      View,
      bootstrap,
      Dashboard,
      Main;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
    }, function($__m) {
      bootstrap = $__m.bootstrap;
    }, function($__m) {
      Dashboard = $__m.Dashboard;
    }],
    execute: function() {
      Main = function() {
        function Main() {}
        return ($traceurRuntime.createClass)(Main, {}, {});
      }();
      Object.defineProperty(Main, "annotations", {get: function() {
          return [new Component({selector: 'main'}), new View({
            directives: [Dashboard],
            template: "\n    <dashboard></dashboard>\n  "
          })];
        }});
      bootstrap(Main);
    }
  };
}); 
