import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterPageComponent } from './pages/master-page/master-page.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MasterPageComponent, AuthenticationComponent],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class LayoutsModule {}
