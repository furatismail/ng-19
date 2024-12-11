import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { MatCardModule } from '@angular/material/card'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, LayoutComponent, MatButtonModule, MatListModule, MatCardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

}
