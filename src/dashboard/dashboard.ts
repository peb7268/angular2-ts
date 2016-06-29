
import { Component, View } from 'angular2/core';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import { Chart } from 'charts/chart';

@Component({
  selector: 'dashboard',
  providers: [HTTP_PROVIDERS],
  output: ['data']
})

@View({
  directives: [Chart],
  templateUrl: 'dashboard/dashboard.html'
})

export class Dashboard {
  test: string = 'Parent';

  constructor(http: Http){
    console.log('Dashboard');
    this.http = http;
  }

  ngOnInit(){
    this.http.get('http://marketpa3pne.intengoresearch.com/dashboard/chart').subscribe(resp => {
      this.data = resp.json();
      console.log('dash data done');
    });
  }

  dataLoaded(evt){
    console.log('data loaded in dashboard: ', this.data, evt);
  }
}

