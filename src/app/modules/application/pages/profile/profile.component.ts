import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  formPassword: FormGroup;
  formUser: FormGroup;
  formEmployer: FormGroup;

  oldPassword = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(512)],
    updateOn: 'blur',
  });

  newPassword = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(512)],
    updateOn: 'blur',
  });

  repeatNewPassword = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(512)],
    updateOn: 'blur',
  });

  name = this.fb.control('', {
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

  phone = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(14)],
    updateOn: 'blur',
  });

  employerId = this.fb.control('', {
    validators: [Validators.required],
    updateOn: 'blur',
  });

  constructor(private fb: FormBuilder) {
    this.formPassword = this.fb.group({
      oldPassword: this.oldPassword,
      newPassword: this.newPassword,
      repeatNewPassword: this.repeatNewPassword,
    });

    this.formUser = this.fb.group({
      name: this.name,
      email: this.email,
      phone: this.phone,
    });

    this.formEmployer = this.fb.group({
      employerId: this.employerId,
    });
  }

  ngOnInit(): void {}
}
