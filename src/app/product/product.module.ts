import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { DonationComponent } from './pages/donation/donation.component';
import { ExchangeComponent } from './pages/exchange/exchange.component';
import { LoanComponent } from './pages/loan/loan.component';


@NgModule({
  declarations: [
    DonationComponent,
    ExchangeComponent,
    LoanComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
