import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { CadreadminComponent } from './cadreadmin/cadreadmin.component';

const routes: Routes = [
  {path: 'enseignant', component:EnseignantComponent},
  {path: 'etudiant', component:EtudiantComponent},
  {path: 'cadre', component:CadreadminComponent},
  {path:'',redirectTo:'/enseignant', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
