import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component';
import {InformativeBannerComponent} from './components/informative-banner/informative-banner.component';
import {ProceduresComponent} from './components/procedures/procedures.component';
import {EmergencyContactsComponent} from './components/emergency-contacts/emergency-contacts.component';
import {ActualityComponent} from './components/actuality/actuality.component';
import {MainBannerComponent} from './components/main-banner/main-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InformativeBannerComponent,
    ProceduresComponent,
    EmergencyContactsComponent,
    ActualityComponent,
    MainBannerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
