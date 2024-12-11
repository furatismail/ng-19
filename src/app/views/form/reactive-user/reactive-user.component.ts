import { JsonPipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

export interface UserForm {
  name: FormControl<string | null>,
  email: FormControl<string | null>,
  showEmail: FormControl<boolean | null>
}

@Component({
  selector: 'app-reactive-user',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './reactive-user.component.html',
  styleUrl: './reactive-user.component.css'
})
export class ReactiveUserComponent implements OnInit {
  form: FormGroup<UserForm>;
  submitted: boolean = false;

  get nameCtrl() {
    return this.form.controls.name;
  }

  get emailCtrl() {
    return this.form.controls.email;
  }

  get showEmail() {
    return this.form.controls.showEmail;
  }

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: this.fb.control<string | null>('', [Validators.required]),
      email: this.fb.control<string | null>('', [Validators.required]),
      showEmail: this.fb.control<boolean | null>(false), // výchozí hodnota pro zobrazení emailu
    })
  }

  ngOnInit() {
    this.form.controls?.showEmail.valueChanges.subscribe(input => {
      console.log(input)
      if(input === false) {
        this.emailCtrl.disable()
      }
    })
  }

  getShowEmail(): void {
    console.log('run')
    if(this.showEmail.value === false) {
      this.emailCtrl.disable()
    }
  }


  onSubmit() {
    this.submitted = true;

    const value = this.form.value;
    const valid = this.form.valid;

    if(valid) {
      console.log('VALIDNI')
    } else {
     console.log('NEVALIDNI')
    }

  }
}






