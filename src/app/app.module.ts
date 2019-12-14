import { HttpClientModule } from '@angular/common/http';
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
import { NavbarComponent } from './components/accueil/navbar/navbar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ActualitesComponent } from './pages/actualites/actualites.component';
import { RessourcesDocumentsComponent } from './pages/ressources-documents/ressources-documents.component';
import { SignInFormComponent } from './components/forms/sign-in-form/sign-in-form.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignUpFormComponent } from './components/forms/sign-up-form/sign-up-form.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './components/dashboards/sidebar/sidebar.component';
import { VidangesComponent } from './components/dashboards/vidanges/vidanges.component';
import { DocumentsComponent } from './components/dashboards/documents/documents.component';
import { CommuniactionComponent } from './components/dashboards/communiaction/communiaction.component';
import { EvenementsComponent } from './components/dashboards/evenements/evenements.component';
import { BurgerMenuComponent } from './components/burger-menu/burger-menu.component';
import { ProjetComponent } from './components/accueil/projet/projet.component';
import { BienvenuComponent } from './components/accueil/bienvenu/bienvenu.component';
import {MatTabsModule} from '@angular/material/tabs';
import { WitnessComponent} from './components/witness/witness.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    FooterComponent,
    CarouselComponent,
    CardComponent,
    NavbarComponent,
    HomepageComponent,
    ActualitesComponent,
    RessourcesDocumentsComponent,
    SignInFormComponent,
    SignInComponent,
    SignUpComponent,
    SignUpFormComponent,
    DashboardComponent,
    SidebarComponent,
    VidangesComponent,
    DocumentsComponent,
    CommuniactionComponent,
    EvenementsComponent,
    BurgerMenuComponent,
    ProjetComponent,
    BienvenuComponent,
    WitnessComponent
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
    HttpClientModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
