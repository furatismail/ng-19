import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
// import { StatisticsComponent } from "../statistics/statistics.component";
// import { PanelComponent } from '../panel/panel.component';

@Component({
  selector: 'app-overview',
  // imports: [StatisticsComponent, PanelComponent],
  imports: [RouterOutlet, RouterLink],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {

  constructor(private router: Router) {
  }

  // isPanelShown: boolean = true;

  // togglePanel() : void {
  //   if(this.isPanelShown) {
  //     this.isPanelShown = false
  //   } else {
  //     this.isPanelShown = true
  //   }
  // }

  navigate() {
    this.router.navigate(['/dashboard'])
  }

}
