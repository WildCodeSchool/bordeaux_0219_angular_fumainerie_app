import { IntroductionComponent } from './components/home/introduction/introduction.component';
import { DocumentsSearchComponent } from './components/home/documents-search/documents-search.component';
import { NewsLinkComponent } from './pages/dashboard/newsLink/news.link.component';
import { WitnessDeleteModalComponent } from './components/modals/witness-delete-modal/witness-delete-modal.component';
import { NewsComponent } from './components/home/news/news.component';
import { LogInterceptor } from './core/log.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClientJsonpModule} from '@angular/common/http';
import { AngularMaterialModule } from './shared/angular-material.module';
import { CarouselModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/home/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './components/home/footer/footer.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { CardComponent } from './components/home/carousel/card/card.component';
import { NavbarComponent } from './components/home/navbar/navbar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SignInFormComponent } from './components/auth/sign-in-form/sign-in-form.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignUpFormComponent } from './components/auth/sign-up-form/sign-up-form.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './components/dashboards/sidebar/sidebar.component';
import { VidangesComponent } from './components/dashboards/vidanges/vidanges.component';
import { CommunicationComponent } from './pages/dashboard/communication/communication.component';
import { BurgerMenuComponent } from './components/burger-menu/burger-menu.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');
import { ProjetComponent } from './components/home/projet/projet.component';
import { MatTabsModule} from '@angular/material/tabs';
import { WitnessComponent} from './components/dashboards/communication/view/witness/witness.component';
import { EventsFormComponent } from './components/forms/events-form/events-form.component';
import { QuestionFormComponent } from './components/forms/question-form/question-form.component';
import { WitnessFormComponent } from './components/forms/witness-form/witness-form.component';
import { ViewComponent } from './components/dashboards/communication/view/view.component';
import { ButtonsComponent } from './components/dashboards/communication/view/buttons/buttons.component';
import { EventsComponent } from './pages/dashboard/events/events.component';
import { DialogSignupComponent } from './components/auth/sign-up-form/dialog-signup/dialog-signup.component';
import { NewComponent } from './components/dashboards/communication/view/new/new.component';
import { EventDeleteModalComponent } from './components/modals/event-delete-modal/event-delete-modal.component';
import { FormValidationComponent } from './components/forms/form-validation/form-validation.component';
import { QuestionComponent } from './components/dashboards/communication/view/question/question.component';
import { QuestionDeleteModalComponent } from './components/modals/question-delete-modal/question-delete-modal.component';
import { NewsDeleteModalComponent } from './components/modals/news-delete-modal/news-delete-modal.component';
import { NewsFormComponent } from './components/forms/news-form/news-form.component';
import { UploadFormComponent } from './components/forms/upload-form/upload-form.component';
import { DocumentsComponent } from './pages/dashboard/documents/documents.component';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { UploadDeleteFileModalComponent } from './components/modals/upload-delete-file-modal/upload-delete-file-modal.component';
import { DrainingFormComponent} from './components/forms/draining-form/draining-form.component';
import { ViewVidangeurComponent } from './components/dashboards/vidanges/view-vidangeur/view-vidangeur.component';
import { ViewProducteurComponent } from './components/dashboards/vidanges/view-producteur/view-producteur.component';
import { GenericModalComponent } from './components/modals/generic-modal/generic-modal.component';
import { ServerUrlPipe } from './core/server-url.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    FooterComponent,
    CarouselComponent,
    CardComponent,
    NavbarComponent,
    HomepageComponent,
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
    IntroductionComponent,
    WitnessComponent,
    QuestionFormComponent,
    WitnessFormComponent,
    ViewComponent,
    ButtonsComponent,
    EventsComponent,
    EventsFormComponent,
    DialogSignupComponent,
    NewsComponent,
    NewComponent,
    NewsDeleteModalComponent,
    WitnessDeleteModalComponent,
    NewsFormComponent,
    EventDeleteModalComponent,
    FormValidationComponent,
    QuestionDeleteModalComponent,
    NewsDeleteModalComponent,
    NewsFormComponent,
    NewsLinkComponent,
    QuestionComponent,
    UploadFormComponent,
    DrainingFormComponent,
    GenericModalComponent,
    UploadDeleteFileModalComponent,
    ViewProducteurComponent,
    ViewVidangeurComponent,
    ServerUrlPipe,
    DocumentsSearchComponent
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
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule,
    HttpClientJsonpModule
  ],

  providers: [
    {
    provide: LOCALE_ID,
    useValue: 'fr'
    },
    {
    provide : HTTP_INTERCEPTORS,
    useClass: LogInterceptor,
    multi: true
  }
],

  bootstrap: [AppComponent],
  entryComponents: [
   GenericModalComponent,
   DialogSignupComponent,
    QuestionDeleteModalComponent,
    QuestionDeleteModalComponent,
    WitnessDeleteModalComponent,
    NewsDeleteModalComponent,
    EventDeleteModalComponent,
    NewsDeleteModalComponent,
    DrainingFormComponent,
    UploadDeleteFileModalComponent,


  ]
})
export class AppModule { }

