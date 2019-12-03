import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './shared/app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './app/components/accueil/contact/contact.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { UnderConstructionComponent } from './Pages/under-construction/under-construction.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AccueilComponent,
    UnderConstructionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
