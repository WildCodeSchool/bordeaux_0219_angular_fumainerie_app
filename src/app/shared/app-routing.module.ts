import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnderConstructionComponent } from '../Pages/under-construction/under-construction.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'En Construction' },
  { path: 'En Construction', component: UnderConstructionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
