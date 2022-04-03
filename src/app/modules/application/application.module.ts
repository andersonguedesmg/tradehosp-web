import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { DonationComponent } from './pages/donation/donation.component';
import { ExchangeComponent } from './pages/exchange/exchange.component';
import { LoanComponent } from './pages/loan/loan.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    DonationComponent,
    ExchangeComponent,
    LoanComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    ApplicationRoutingModule,
  ],
})
export class ApplicationModule {}
