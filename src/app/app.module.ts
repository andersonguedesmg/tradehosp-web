import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskModule } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { AdminModule } from './modules/admin/admin.module';
import { ApplicationModule } from './modules/application/application.module';
import { AuthModule } from './modules/auth/auth.module';
import { ModulesModule } from './modules/modules.module';
import { SiteModule } from './modules/site/site.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    ModulesModule,
    SharedModule,
    AdminModule,
    ApplicationModule,
    AuthModule,
    SiteModule,
    NgxMaskModule.forRoot({ dropSpecialCharacters: false }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
