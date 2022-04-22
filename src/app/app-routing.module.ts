import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './layouts/pages/authentication/authentication.component';
import { MasterPageComponent } from './layouts/pages/master-page/master-page.component';
import { DonationComponent } from './modules/application/pages/donation/donation.component';
import { ExchangeComponent } from './modules/application/pages/exchange/exchange.component';
import { HomeComponent } from './modules/application/pages/home/home.component';
import { LoanComponent } from './modules/application/pages/loan/loan.component';
import { ProductDetailComponent } from './modules/application/pages/product-detail/product-detail.component';
import { ProductRegisterComponent } from './modules/application/pages/product-register/product-register.component';
import { ProfileComponent } from './modules/application/pages/profile/profile.component';
import { LoginComponent } from './modules/auth/pages/login/login.component';
import { NotFoundComponent } from './modules/auth/pages/not-found/not-found.component';
import { AboutComponent } from './modules/site/pages/about/about.component';
import { SignupComponent } from './modules/site/pages/signup/signup.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: MasterPageComponent,
  //   children: [
  //     { path: 'dashboard', component: DashboardComponent },
  //   ],
  //   canActivate: [AuthGuard],
  // },
  {
    path: '',
    component: MasterPageComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'cadastrar', component: SignupComponent },
      { path: 'troca', component: ExchangeComponent },
      { path: 'doacao', component: DonationComponent },
      { path: 'emprestimo', component: LoanComponent },
      { path: 'sobre', component: AboutComponent },
      { path: 'novo', component: ProductRegisterComponent },
      { path: 'perfil', component: ProfileComponent },
      { path: 'item', component: ProductDetailComponent },
    ],
  },
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
    ],
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
