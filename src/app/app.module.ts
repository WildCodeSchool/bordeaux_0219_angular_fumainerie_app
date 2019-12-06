import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { CarouselModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { SignInFormComponent } from './components/forms/sign-in-form/sign-in-form.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignUpFormComponent } from './components/forms/sign-up-form/sign-up-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    FooterComponent,
    CarouselComponent,
    CardComponent,
    HomepageComponent,
    ActualitesComponent,
    RessourcesDocumentsComponent,
    SignInFormComponent,
    SignInComponent,
    SignUpComponent,
    SignUpFormComponent
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
    CarouselModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
