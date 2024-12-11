import { JsonPipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, ReactiveFormsModule, FormControl } from '@angular/forms';

export interface SkillForm {
  skills: FormArray<any>
}

export interface Skill {
  skillName: FormControl<string>,
  proficiency: FormControl<string>
}

@Component({
  selector: 'app-skills-form',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  imports: [ReactiveFormsModule]
})
export class SkillsFormComponent implements OnInit {
  skillsForm!: FormGroup<any>;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.skillsForm = this.fb.group({
      skills: this.fb.array([
        this.fb.group({
          skillName: ['', Validators.required],
          proficiency: ['', Validators.required]
        })
      ])
    });
  }

  get skills(): FormArray {
    return this.skillsForm.get('skills') as FormArray;
  }

  createSkill(): FormGroup {
    return this.fb.group({
      skillName: ['', Validators.required],
      proficiency: ['', Validators.required]
    });
  }

  addSkill(): void {
    this.skills.push(this.createSkill());
  }

  removeSkill(index: number): void {
    this.skills.removeAt(index);
  }

  onSubmit(): void {
    console.log(this.skillsForm.value);
  }
}
