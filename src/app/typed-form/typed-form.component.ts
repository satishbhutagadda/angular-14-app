import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ITypedForm } from '../shared/models/app.model';

@Component({
  selector: 'app-typed-form',
  templateUrl: './typed-form.component.html',
  styleUrls: ['./typed-form.component.scss']
})
export class TypedFormComponent implements OnInit {
  form!: FormGroup<ITypedForm>;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group<ITypedForm>({
      userName: new FormControl(''),
      age: new FormControl(0, {nonNullable: true}),
      address: new FormControl(''),
      gender: new FormControl(''),
    });
  }

  submit(): void {
    console.log(this.form.getRawValue());
  }

  calc(value: number){
    const year = new Date().getFullYear();
    return year - value;
  }

  get age() {
    return this.form.controls.age;
  }

}
