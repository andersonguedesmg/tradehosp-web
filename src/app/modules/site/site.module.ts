import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { AboutComponent } from './pages/about/about.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { FaqComponent } from './components/faq/faq.component';
import { WhatWeDoComponent } from './components/what-we-do/what-we-do.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

@NgModule({
  declarations: [AboutComponent, SignupComponent, HeaderComponent, FaqComponent, WhatWeDoComponent, AboutUsComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    SiteRoutingModule,
  ],
})
export class SiteModule {}
