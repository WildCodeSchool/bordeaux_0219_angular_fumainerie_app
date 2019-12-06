import { SignInComponent } from './pages/sign-in/sign-in.component';
import { RessourcesDocumentsComponent } from './pages/ressources-documents/ressources-documents.component';
import { ActualitesComponent } from './pages/actualites/actualites.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component : HomepageComponent},
  {path: 'accueil', component : HomepageComponent},
  {path: 'connexion', component  : SignInComponent},
  {path: 'actualites', component : ActualitesComponent},
  {path: 'ressources', component : RessourcesDocumentsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
