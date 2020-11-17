import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { InstallmentsReqComponent } from './installments-req/installments-req.component';
import { CardComponent } from './components/card/card.component';
import { OccordionComponent } from './components/occordion/occordion.component';

@NgModule({
  declarations: [
    AppComponent,
    InsuranceComponent,
    InstallmentsReqComponent,
    CardComponent,
    OccordionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
