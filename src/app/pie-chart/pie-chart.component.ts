import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  segments: Segment[] = [];
  constructor() {
    this.segments.push(new Segment(.78, 'green'));
    this.segments.push(new Segment(.19, 'yellow'));
    this.segments.push(new Segment(.03, 'red'));
  }

  ngOnInit() {

  }

  calculatePath(segment: Segment): string {
    
    if (segment.percent <= .5) {
      const rotation = 0;
      const radian = 2 * Math.PI * segment.percent;
      const x = Math.cos(radian) * 45;
      const y = Math.sin(radian) * 45;
      return `M 5 100 a 45 45 ${rotation} 0 1 ${45 - x} ${-y} l ${x} ${y} Z`;
    } else {
      const rotation = 0;
      const radian = 2 * Math.PI * segment.percent;
      const x = Math.cos(radian) * 45;
      const y = Math.sin(radian) * 45;
      return `M 5 100 a 45 45 ${rotation} 1 1 ${45 - x} ${-y} l ${x} ${y} Z`;
    }
  }
}

export class Segment {
  private static _counter = 0;
  public static Create(percent: number, color: string): Segment {
    return new Segment(percent, color, this._counter++);
  }
  private constructor(public percent: number, public color: string, public id: number) { }
}
