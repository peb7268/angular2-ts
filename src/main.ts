
import { Component, View } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';

import { Dashboard } from 'dashboard/dashboard';

@Component({
  selector: 'main'
})

@View({
  directives: [Dashboard],
  template: "\n  <dashboard></dashboard>\n  "
})

export class Main {}

bootstrap(Main);
