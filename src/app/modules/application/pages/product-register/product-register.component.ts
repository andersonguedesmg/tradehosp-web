import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-register',
  templateUrl: './product-register.component.html',
  styleUrls: ['./product-register.component.scss'],
})
export class ProductRegisterComponent implements OnInit {
  form: FormGroup;

  name = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(128)],
    updateOn: 'blur',
  });

  description = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(256)],
    updateOn: 'blur',
  });

  quantity = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(128)],
    updateOn: 'blur',
  });

  unity = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(128)],
    updateOn: 'blur',
  });

  validity = this.fb.control('', {
    validators: [Validators.maxLength(10)],
    updateOn: 'blur',
  });

  local = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(128)],
    updateOn: 'blur',
  });

  typeId = this.fb.control('', {
    validators: [Validators.required],
    updateOn: 'blur',
  });

  productionBatch = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(128)],
    updateOn: 'blur',
  });

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: this.name,
      description: this.description,
      quantity: this.quantity,
      validity: this.validity,
      local: this.local,
      unity: this.unity,
      typeId: this.typeId,
      productionBatch: this.productionBatch,
    });
  }

  ngOnInit(): void {}
}
