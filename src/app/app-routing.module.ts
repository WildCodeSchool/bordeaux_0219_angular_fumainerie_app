import { RessourcesDocumentsComponent } from './pages/ressources-documents/ressources-documents.component';
import { ActualitesComponent } from './pages/actualites/actualites.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component : HomepageComponent},
  {path: 'home', component : HomepageComponent},
  {path: 'actualites', component : ActualitesComponent},
  {path: 'ressources', component : RessourcesDocumentsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
