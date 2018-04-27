import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  bars: Bar[] = [];
  currentBar: Bar;

  constructor() {
    for (let i = 0; i < 100; i++) {
      this.bars.push(new Bar(i, Math.floor(Math.random() * 100)));
    }
  }

  ngOnInit() {
  }

  setCurrent(analysis: Bar): void {
    this.currentBar = analysis;
  }
  clearCurrent(): void {
    this.currentBar = undefined;
  }

  getDashArray(bar: Bar): string {
    return `${bar.count * 2} 1000`;
  }
  getDashArrayForBackground(bar: Bar): string {
    return `${200 - (bar.count * 2)} 1000`;
  }

  getStrokeOffsetForBackground(bar: Bar): string {
    return `${-bar.count * 2}`;
  }
}

export class Bar {
  constructor(public postion: number, public count: number) { }
}
