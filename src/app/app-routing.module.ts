import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SidebarComponent } from './components/dashboards/sidebar/sidebar.component';
import { EvenementsComponent } from './components/dashboards/evenements/evenements.component';
import { CommuniactionComponent } from './components/dashboards/communiaction/communiaction.component';
import { DocumentsComponent } from './components/dashboards/documents/documents.component';
import { VidangesComponent } from './components/dashboards/vidanges/vidanges.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RessourcesDocumentsComponent } from './pages/ressources-documents/ressources-documents.component';
import { ActualitesComponent } from './pages/actualites/actualites.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/accueil', pathMatch: 'full'},
  {path: 'accueil', component : HomepageComponent},
  {path: 'connexion', component  : SignInComponent},
  {path: 'actualites', component : ActualitesComponent},
  {path: 'ressources', component : RessourcesDocumentsComponent},
  {path: 'dashboard', component : DashboardComponent, children: [
    {path: '', redirectTo: 'vidanges', pathMatch: 'full'},
    {path: 'vidanges', component : VidangesComponent},
    {path: 'documents', component : DocumentsComponent},
    {path: 'communication', component : CommuniactionComponent},
    {path: 'evenements', component : EvenementsComponent}
  ]},
  {path: 'sidebar', component : SidebarComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
