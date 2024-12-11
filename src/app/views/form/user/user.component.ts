import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../shared/interfaces/user.interface';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user: User = {
    name: "",
    email: ""
  }

}
