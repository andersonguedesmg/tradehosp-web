import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  form: FormGroup;

  name = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(256)],
    updateOn: 'blur',
  });

  password = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(256)],
    updateOn: 'blur',
  });

  repeatPassword = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(256)],
    updateOn: 'blur',
  });

  email = this.fb.control('', {
    validators: [
      Validators.required,
      Validators.maxLength(256),
      Validators.email,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
    ],
    updateOn: 'blur',
  });

  rg = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(15)],
    updateOn: 'blur',
  });

  cpf = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(14)],
    updateOn: 'blur',
  });

  job = this.fb.control('', {
    validators: [Validators.maxLength(10)],
    updateOn: 'blur',
  });

  employerId = this.fb.control('', {
    validators: [Validators.required],
    updateOn: 'blur',
  });

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: this.name,
      password: this.password,
      email: this.email,
      rg: this.rg,
      cpf: this.cpf,
      job: this.job,
      employerId: this.employerId,
    });
  }

  ngOnInit(): void {}

  clearForm() {
    this.form.reset();
  }
}
