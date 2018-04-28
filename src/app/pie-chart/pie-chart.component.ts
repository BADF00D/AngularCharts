import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  segments: Segment[] = [];
  constructor() {
    this.segments.push(Segment.Create(0.78, 'green'));
    this.segments.push(Segment.Create(0.19, 'yellow'));
    this.segments.push(Segment.Create(0.03, 'red'));
  }

  ngOnInit() {}

  calculatePath(segment: Segment): string {
    if (segment.percent <= 0.5) {
      const radian = 2 * Math.PI * segment.percent;
      const x = Math.cos(radian) * 45;
      const y = Math.sin(radian) * 45;
      return `M 5 50 a 45 45 0 0 1 ${45 - x} ${-y} l ${x} ${y} Z`;
    } else {
      const radian = 2 * Math.PI * segment.percent;
      const x = Math.cos(radian) * 45;
      const y = Math.sin(radian) * 45;
      return `M 5 50 a 45 45 0 1 1 ${45 - x} ${-y} l ${x} ${y} Z`;
    }
  }
  calculateRotation(segment: Segment): string {
    let percent = 0;
    for (let i = 0; i < this.segments.length; i++) {
      if (this.segments[i].id === segment.id) {
        break;
      }
      percent += this.segments[i].percent;
    }
    const rotation = percent * 360;

    return `rotate(${rotation})`;
  }
}

export class Segment {
  private static _counter = 0;
  public static Create(percent: number, color: string): Segment {
    return new Segment(percent, color, this._counter++);
  }
  private constructor(
    public percent: number,
    public color: string,
    public id: number
  ) {}
}
