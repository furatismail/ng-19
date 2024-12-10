import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input({required: true}) title: string = '';
  @Input({required: true}) id: number;
  @Output() cardClicked = new EventEmitter<number>()


  cardClick() : void {
    this.cardClicked.emit(this.id)
  }
}
