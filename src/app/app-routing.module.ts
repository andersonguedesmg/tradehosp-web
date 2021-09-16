import { NgModule } from '@angular/core';
import {
  PreloadAllModules,
  Router,
  RouterModule,
  Routes,
} from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import { NotFoundComponent } from './auth/pages/not-found/not-found.component';
import { AboutComponent } from './home/pages/about/about.component';
import { HomeComponent } from './home/pages/home/home.component';
import { DonationComponent } from './product/pages/donation/donation.component';
import { ExchangeComponent } from './product/pages/exchange/exchange.component';
import { LoanComponent } from './product/pages/loan/loan.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'troca',
    component: ExchangeComponent,
  },
  {
    path: 'doacao',
    component: DonationComponent,
  },
  {
    path: 'emprestimo',
    component: LoanComponent,
  },
  {
    path: 'sobre',
    component: AboutComponent,
  },
];

const defaultRoutes: Routes = [
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot([...routes, ...defaultRoutes], {
      scrollPositionRestoration: 'disabled',
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private router: Router) {
    router.resetConfig([...routes, ...defaultRoutes]);
  }
}
