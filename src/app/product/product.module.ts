import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { DonationComponent } from './pages/donation/donation.component';
import { ExchangeComponent } from './pages/exchange/exchange.component';
import { LoanComponent } from './pages/loan/loan.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DetailComponent } from './pages/detail/detail.component';

@NgModule({
  declarations: [DonationComponent, ExchangeComponent, LoanComponent, DetailComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    ProductRoutingModule,
  ],
})
export class ProductModule {}
