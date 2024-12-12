import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { Film } from '../../shared/interfaces/film.interface';
import { JsonPipe } from '@angular/common';
import { DataSharingService } from '../../shared/services/data-sharing/data-sharing.service';
import { IconPipe } from '../../shared/pipes/icon.pipe';
import { MatIconModule } from '@angular/material/icon';
import { HighlightDirective } from '../../shared/directives/highlight.directive';

@Component({
  selector: 'app-home',
  imports: [CardComponent, JsonPipe, IconPipe, MatIconModule, HighlightDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {



  films = [
    {
      id: 1,
      name: 'Predator 1',
      inStock: true
    },
    {
      id: 2,
      name: 'Predator 2',
      inStock: false
    }
  ];

  cart = [];

  constructor(private dataSharingService: DataSharingService) {

  }

  onCardClicked($event: number): void {
    const id = $event;
    const film = this.films.find((obj: Film) => obj.id === id);
    this.addToCart(film);
  }

  private addToCart(film: Film): void {
    this.cart.push(film);
    this.dataSharingService.emitData(film);
  }

}
