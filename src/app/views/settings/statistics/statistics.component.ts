import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-statistics',
  imports: [],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css'
})
export class StatisticsComponent {
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(res => console.log(res))
  }
}
