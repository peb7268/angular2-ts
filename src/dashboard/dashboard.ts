
import { Component, View, EventEmitter } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import 'rxjs/Rx';

import {HTTP_PROVIDERS, Http} from 'angular2/http';
import { Chart } from 'charts/chart';

//TODO: Make this the main component - aka remove the main componenet and have this as the top level component.

@Component({
  selector: 'dashboard',
  providers: [HTTP_PROVIDERS],
  output: ['data', 'dataEvent']
})

@View({
  directives: [Chart],
  templateUrl: 'dashboard/dashboard.html'
})

export class Dashboard {
  public data: Object;

  constructor(public http: Http){
    var observable = this.http.get('http://marketpa3pne.intengoresearch.com/dashboard/chart').map( (resp) => {
      return resp.json();
    }).subscribe(resp => this.data = resp );
  }

  ngOnInit(){}
}

bootstrap(Dashboard, [HTTP_PROVIDERS]);
