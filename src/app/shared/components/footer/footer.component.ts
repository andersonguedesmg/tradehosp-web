import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  currentYear: any;
  initialYear: string = '2021';

  constructor() {}

  ngOnInit(): void {
    this.getCurrentYear();
  }

  getCurrentYear() {
    let currentTime = new Date();
    this.currentYear = currentTime.getFullYear();
  }
}
