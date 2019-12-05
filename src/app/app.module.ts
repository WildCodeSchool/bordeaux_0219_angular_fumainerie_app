import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { CarouselModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/accueil/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './components/accueil/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardComponent } from './components/carousel/card/card.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ActualitesComponent } from './pages/actualites/actualites.component';
import { RessourcesDocumentsComponent } from './pages/ressources-documents/ressources-documents.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    FooterComponent,
    CarouselComponent,
    CardComponent,
    HomepageComponent,
    ActualitesComponent,
    RessourcesDocumentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterModule,
    AngularMaterialModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
