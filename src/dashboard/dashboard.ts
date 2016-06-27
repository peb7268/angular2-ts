
import { Component } from 'angular2/core';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard/dashboard.html'
})

export class Dashboard {

  ngOnInit(){
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
        labelInterpolationFnc: function(value) {
          return (value / 1000) + 'k';
        }
      }
    }

    // Create a new line chart object where as first parameter we pass in a selector
    // that is resolving to our chart container element. The Second parameter
    // is the actual data object.
    var chart = new Chartist.Bar('.ct-chart', data, options);
    chart.on('draw', function(data) {
      if (data.type === 'bar') {
        data.element.attr({
          style: 'stroke-width: 30px'
        });
      }
    });
  }
}

