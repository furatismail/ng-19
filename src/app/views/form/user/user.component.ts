import { JsonPipe, NgIf } from '@angular/common';
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../../shared/interfaces/user.interface';
import { UserService } from '../../../shared/services/user/user.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-user',
  imports: [FormsModule, NgIf, JsonPipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  @ViewChild('formRef') formRef: NgForm;
  
  private userService = inject(UserService);

  user: User = {
    name: "",
    email: ""
  };

  ngOnInit() {
    // 1. varianta
    this.userService.get().subscribe(response => this.user = response)

    // 2. varianta
    // this.user = await lastValueFrom(this.userService.get())
  }

  validateBlackListedNames(name: string) {
    console.log('co je formRef: ', this.formRef)

    // neni to undefined A neni to null, to znamena neni to prazdne
    if (!!name) {
      // validovat jestli to neni zakazane uzivatelske meno
      if (name.includes('admin')) {
        const nameCtrl = this.formRef.form.controls.name;
        nameCtrl.setErrors({
          blackListed: true
        })
      }
    }
  }

  async onSubmit(form: NgForm) {
    const { valid, value } = form;
    if (valid) {
      // volam API a odesilam
      console.log(value)
      await this.saveUser(value)
    }
  }

  private async saveUser(user: User) {
    try {
      const response = await lastValueFrom(this.userService.save(user))
      console.log(response)
      if(response?.status === true) {
        alert('Ulozeno')
      }

      if(response?.status === false) {
        alert('Business chyba')
      }
    } catch (error) {
      alert('Error')
    }
      
  }
}
