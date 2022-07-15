import { Component, OnInit, Output, EventEmitter } from '@angular/core';
 import { TaskService } from '../../services/task.service';
 

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css',],

})
export class TaskFormComponent implements OnInit  {
  title!: string;
  apellido!: string;
  email!: string;
  celular!: string;
  fecha!: string;
  hora!: string;
  description!: string;
  

  constructor(public taskService: TaskService) { }

  ngOnInit() {
  }

  addTask(newTitle: HTMLInputElement, newDescription: HTMLTextAreaElement, newApellido: HTMLInputElement,newEmail:HTMLInputElement, newCelular:HTMLInputElement,newFecha:HTMLInputElement,newHora:HTMLInputElement) {
    this.taskService.addTask({
      title: newTitle.value,
      apellido: newApellido.value,
      email: newEmail.value,
      celular: newCelular.value,
      fecha: newFecha.value,
      hora: newHora.value,
      description: newDescription.value,
      hide: true
    });
    newTitle.value = '';
    newDescription.value = '';
    newApellido.value = '';
    newEmail.value='';
    newCelular.value='';
    newFecha.value='';
    newHora.value='';
    return false;
  }

}
