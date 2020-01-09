import { AuthGardGuard } from './core/auth-gard.guard';
import { EventsComponent } from './pages/dashboard/events/events.component';
import { ButtonsComponent } from './components/dashboards/communication/view/buttons/buttons.component';
import { ViewComponent } from './components/dashboards/communication/view/view.component';
import { QuestionFormComponent } from './components/dashboards/communication/view/question-form/question-form.component';
import { WitnessFormComponent } from './components/dashboards/communication/view/witness-form/witness-form.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SidebarComponent } from './components/dashboards/sidebar/sidebar.component';
import { CommunicationComponent } from './pages/dashboard/communication/communication.component';
import { DocumentsComponent } from './components/dashboards/documents/documents.component';
import { VidangesComponent } from './components/dashboards/vidanges/vidanges.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { config } from 'rxjs';
import { SignUpComponent } from './pages/sign-up/sign-up.component';


const routes: Routes = [

  {path: '', redirectTo: 'accueil', pathMatch: 'full', canActivate: []},
  {path: 'accueil', component : HomepageComponent},
  {path: 'connexion', component  : SignInComponent},
  {path: 'inscription', component  : SignUpComponent},
  {path: 'dashboard', component : DashboardComponent, children: [
    {path: '', redirectTo: 'vidanges', pathMatch: 'full'},
    {path: 'vidanges', component : VidangesComponent},
    {path: 'documents', component : DocumentsComponent},
    {path: 'communication', component: CommunicationComponent, children: [
      {path: '', redirectTo: 'avis', pathMatch: 'full'},
      {path: 'avis', component: ViewComponent, children: [
        {path: '', component: ButtonsComponent},
        {path: 'question', component: QuestionFormComponent},
        {path: 'temoigner', component: WitnessFormComponent}]}]},
    {path: 'evenements', component : EventsComponent }]},
  {path: 'sidebar', component : SidebarComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling : 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {
  }

