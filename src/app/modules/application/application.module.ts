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
import { ProductRegisterComponent } from './pages/product-register/product-register.component';
import { NgxMaskModule } from 'ngx-mask';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

@NgModule({
  declarations: [
    HomeComponent,
    DonationComponent,
    ExchangeComponent,
    LoanComponent,
    ProductRegisterComponent,
    ProfileComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    ApplicationRoutingModule,
    NgxMaskModule.forChild(),
  ],
})
export class ApplicationModule {}
