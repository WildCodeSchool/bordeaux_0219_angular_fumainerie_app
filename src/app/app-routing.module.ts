import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/accueil/navbar/navbar.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'accueil'},
  { path: 'accueil', component: NavbarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
