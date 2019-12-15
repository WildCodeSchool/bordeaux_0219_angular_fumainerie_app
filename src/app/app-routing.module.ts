import { ViewComponent } from './components/dashboards/communication/view/view.component';
import { QuestionFormComponent } from './components/dashboards/communication/question-form/question-form.component';
import { WitnessFormComponent } from './components/dashboards/communication/witness-form/witness-form.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SidebarComponent } from './components/dashboards/sidebar/sidebar.component';
import { EvenementsComponent } from './components/dashboards/evenements/evenements.component';
import { CommunicationComponent } from './pages/dashboard/communication/communication.component';
import { DocumentsComponent } from './components/dashboards/documents/documents.component';
import { VidangesComponent } from './components/dashboards/vidanges/vidanges.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {path: '', redirectTo: '/accueil', pathMatch: 'full'},
  {path: 'accueil', component : HomepageComponent},
  {path: 'connexion', component  : SignInComponent},
  {path: 'dashboard', component : DashboardComponent, children: [
    {path: '', redirectTo: 'vidanges', pathMatch: 'full'},
    {path: 'vidanges', component : VidangesComponent},
    {path: 'documents', component : DocumentsComponent},
    {path: 'communication', component: CommunicationComponent, children: [
      {path: '', redirectTo: 'avis', pathMatch: 'full'},
      {path: 'avis', component: ViewComponent},
      {path: 'question', component: QuestionFormComponent},
      {path: 'temoigner', component: WitnessFormComponent}]},
    {path: 'evenements', component : EvenementsComponent}]},
  {path: 'sidebar', component : SidebarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
