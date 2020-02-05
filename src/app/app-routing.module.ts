import { WitnessComponent } from './components/dashboards/communication/view/witness/witness.component';
import { DocumentsSearchComponent } from './components/home/documents-search/documents-search.component';
import { UploadFormComponent } from './components/forms/upload-form/upload-form.component';
import { FormValidationComponent } from './components/forms/form-validation/form-validation.component';
import { NewsFormComponent } from './components/forms/news-form/news-form.component';
import { NewsLinkComponent } from './pages/dashboard/newsLink/news.link.component';
import { EventsFormComponent } from './components/forms/events-form/events-form.component';
import { EventsComponent } from './pages/dashboard/events/events.component';
import { ButtonsComponent } from './components/dashboards/communication/view/buttons/buttons.component';
import { ViewComponent } from './components/dashboards/communication/view/view.component';
import { QuestionFormComponent } from './components/forms/question-form/question-form.component';
import { WitnessFormComponent } from './components/forms/witness-form/witness-form.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SidebarComponent } from './components/dashboards/sidebar/sidebar.component';
import { CommunicationComponent } from './pages/dashboard/communication/communication.component';
import { VidangesComponent } from './components/dashboards/vidanges/vidanges.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { AuthGuard } from './core/auth.guard';


const routes: Routes = [

  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {path: 'accueil', component : HomepageComponent},
  {path: 'connexion', component  : SignInComponent},
  {path: 'inscription', component  : SignUpComponent},
  {path: 'dashboard', component : DashboardComponent, canActivate: [AuthGuard], children: [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'vidanges', component : VidangesComponent, canActivate: [AuthGuard]},
    {path: 'documents/uploader', component: UploadFormComponent, canActivate: [AuthGuard]},
    {path: 'communication', component: CommunicationComponent, canActivate: [AuthGuard], children: [
      {path: '', redirectTo: 'avis', pathMatch: 'full'},
      {path: 'avis', component: ViewComponent, canActivate: [AuthGuard], children: [
        {path: '', component: ButtonsComponent},
        {path: 'question', component: QuestionFormComponent, canActivate: [AuthGuard]},
        {path: 'temoigner', component: WitnessFormComponent, canActivate: [AuthGuard]}]}]},
    {path: 'evenements', component : EventsComponent , canActivate: [AuthGuard]},
    {path: 'evenements/nouvel', component: EventsFormComponent, canActivate: [AuthGuard]},
    {path: 'actualites', component : NewsLinkComponent , canActivate: [AuthGuard]},
    {path: 'actualites/nouvelle', component: NewsFormComponent, canActivate: [AuthGuard]},
    ]},
  {path: 'sidebar', component: SidebarComponent }];


@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling : 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {
  }
