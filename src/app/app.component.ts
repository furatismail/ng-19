import { Component } from '@angular/core';
import { AboutComponent } from "./views/about/about.component";
import { HomeComponent } from './views/home';

@Component({
  selector: 'app-root',
  imports: [AboutComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  
}
