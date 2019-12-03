import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './shared/app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/accueil/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselItemDirective } from './shared/directives/carousel-item.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    CarouselComponent,
    CarouselItemDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
