import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NavigationComponent } from './components/navigation/navigation.component';
import { TaskComponent } from './components/task/task.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TaskService } from './services/task.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { AgendaComponent } from './agenda/agenda.component';
import { Agenda1Component } from './components/agenda1/agenda1.component';
import { Navbar1Component } from './components/navbar1/navbar1.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { ContactoComponent } from './components/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    // NavigationComponent,
    TaskComponent,
    TaskFormComponent,
    TasksListComponent,
    NavbarComponent,
    AgendaComponent,
    Agenda1Component,
    Navbar1Component,
    CurriculumComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
