
import { Component, View, Input } from 'angular2/core';

@Component({
  selector: 'chart',
  //templateUrl: 'dashboard/dashboard.html',
  inputs: ['data', 'chartType', 'test']
})

@View({
  template: "\n  <div class='ct-chart ct-perfect-fourth'></div> \n "
})

export class Chart {
  public chartType: String;
  @Input() data: Object;

  constructor() {}

  //Fires on init
  ngOnInit() {}

  ngOnChanges(changes:any):void {
    this.composeBarChart(this.data);
  }

  composeBarChart(resp){
    if(resp.length == 0) return;
    var resp    = JSON.parse(resp);
    debugger;

    //Aggregate and sort Chart Data
    var data    = {};
    data.labes  = ['Q1', 'Q2', 'Q3', 'Q4'];
    data.series = [
      [800000, 1200000, 1400000, 1300000],
      [200000, 400000, 500000, 300000],
      [100000, 200000, 400000, 600000]
    ];

    //Set the options
    var options = {
      stackBars: true,
      axisY: {
        labelInterpolationFnc: function (value) {
          return (value / 1000) + 'k';
        }
      }
    };

    //Instantiate the chart
    var chart = new Chartist.Bar('.ct-chart', {
      labels: data.labels,
      series: data.series
    }, options);

    //Add Customization
    chart.on('draw', function (data) {
      if (data.type === 'bar') {
        data.element.attr({
          style: 'stroke-width: 30px'
        });
      }
    });
  }
}

