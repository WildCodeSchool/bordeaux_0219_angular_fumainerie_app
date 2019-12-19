import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './shared/app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/accueil/contact/contact.component';
import { UnderConstructionComponent } from './Pages/under-construction/under-construction.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
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
