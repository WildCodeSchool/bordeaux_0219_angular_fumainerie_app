import { WitnessDeleteModalComponent } from './components/modals/witness-delete-modal/witness-delete-modal.component';
import { EventModalFormComponent } from './components/modals/event-modal-form/event-modal-form.component';
import { QuestionModalComponent } from './components/modals/question-modal/question-modal.component';
import { NewsComponent } from './components/accueil/news/news.component';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { CarouselModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  HttpClientModule  } from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { CommunicationComponent } from './pages/dashboard/communication/communication.component';
import { BurgerMenuComponent } from './components/burger-menu/burger-menu.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');
import { ProjetComponent } from './components/accueil/projet/projet.component';
import { BienvenuComponent } from './components/accueil/bienvenu/bienvenu.component';
import { MatTabsModule} from '@angular/material/tabs';
import { WitnessComponent} from './components/dashboards/communication/view/witness/witness.component';
import { EventsFormComponent } from './pages/dashboard/events/events-form/events-form.component';
import { WitnessModalComponent } from './components/dashboards/communication/view/witness-form/witness-modal/witness-modal.component';
import { QuestionFormComponent } from './components/dashboards/communication/view/question-form/question-form.component';
import { WitnessFormComponent } from './components/dashboards/communication/view/witness-form/witness-form.component';
import { ViewComponent } from './components/dashboards/communication/view/view.component';
import { ButtonsComponent } from './components/dashboards/communication/view/buttons/buttons.component';
import { EventsComponent } from './pages/dashboard/events/events.component';
import { DialogSigninComponent } from './components/forms/sign-in-form/dialog-signin/dialog-signin.component';
import { DialogSignupComponent } from './components/forms/sign-up-form/dialog-signup/dialog-signup.component';
import { NewsletterModalComponent } from './components/accueil/contact/newsletter-modal/newsletter-modal.component';


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
    CommunicationComponent,
    BurgerMenuComponent,
    ProjetComponent,
    BienvenuComponent,
    WitnessComponent,
    QuestionFormComponent,
    WitnessFormComponent,
    ViewComponent,
    ButtonsComponent,
    QuestionModalComponent,
    WitnessModalComponent,
    EventsComponent,
    EventsFormComponent,
    EventModalFormComponent,
    DialogSigninComponent,
    DialogSignupComponent,
    NewsletterModalComponent,
    NewsComponent,
    WitnessDeleteModalComponent
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
    HttpClientModule,
    MatDatepickerModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'fr'
  }],
  bootstrap: [AppComponent],
  entryComponents: [
    QuestionModalComponent,
    WitnessModalComponent,
    DialogSignupComponent,
    DialogSigninComponent,
    NewsletterModalComponent,
    WitnessDeleteModalComponent
  ]
})
export class AppModule { }

