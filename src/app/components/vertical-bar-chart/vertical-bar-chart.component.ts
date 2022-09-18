import { Component, OnInit } from '@angular/core';

const single = [
  {
    "name": "China",
    "value": 8940000
  },
  {
    "name": "India",
    "value": 7940000
  },
  {
    "name": "USA",
    "value": 5000000
  },
  {
    "name": "France",
    "value": 7200000
  },
  {
    "name": "test",
    "value": 1940000
  },
  {
    "name": "test1",
    "value": 3000000
  },
  {
    "name": "test2",
    "value": 3600000
  },
  {
    "name": "test3",
    "value": 1140000
  },
  {
    "name": "test4",
    "value": 900000
  },
  {
    "name": "test5",
    "value": 200000
  }
];

const multi = [
  {
    "name": "Germany",
    "series": [
      {
        "name": "2010",
        "value": 7300000
      },
      {
        "name": "2011",
        "value": 8940000
      }
    ]
  },

  {
    "name": "USA",
    "series": [
      {
        "name": "2010",
        "value": 7870000
      },
      {
        "name": "2011",
        "value": 8270000
      }
    ]
  },

  {
    "name": "France",
    "series": [
      {
        "name": "2010",
        "value": 5000002
      },
      {
        "name": "2011",
        "value": 5800000
      }
    ]
  }
];


@Component({
  selector: 'app-vertical-bar-chart',
  templateUrl: './vertical-bar-chart.component.html',
  styleUrls: ['./vertical-bar-chart.component.scss']
})
export class VerticalBarChartComponent implements OnInit {
  single!: any[];
  multi!: any[];

  view: any = [1000, 500];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme: any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() { }

  ngOnInit(): void {
    Object.assign(this, { single })
  }
  onSelect(event: any) {
    console.log(event);
  }

}
