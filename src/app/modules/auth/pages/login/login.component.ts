import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  signUpChange() {
    const container = document.getElementById('container');
    container?.classList.add('right-panel-active');
  }

  signInChange() {
    const container = document.getElementById('container');
    container?.classList.remove('right-panel-active');
  }
}
