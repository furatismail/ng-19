import { Component } from '@angular/core';
import { DataSharingService } from '../../data-sharing.service';
import { Film } from '../../shared/interfaces/film.interface';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [JsonPipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  currentFilm: Film;

  constructor(private dataSharingService: DataSharingService) {

    this.dataSharingService.currentData.subscribe(data => {
      console.log(data)
      this.currentFilm = data
    })
    
  }
  
}
