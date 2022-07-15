import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Agenda1Component } from './components/agenda1/agenda1.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';


const routes: Routes = [
  {path: 'Agenda1', component: Agenda1Component},
  {path:'curriculum', component:CurriculumComponent},
  {path: 'contacto', component: ContactoComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
