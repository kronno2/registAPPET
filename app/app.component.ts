import { Component } from '@angular/core';

interface Componente{
  name: string;
  redirecTo: string;
  icon:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {

  componentes: Componente[]=[
    {
      name:'Inicio',
      redirecTo:'/inicio',
      icon:'home-outline'
    },
    {
      name:'Alumno',
      redirecTo:'/alumno',
      icon:'school-outline'
    },
    {
      name:'Profesor',
      redirecTo:'/profesor',
      icon:'school-outline'
    },
    {
      name:'Registro',
      redirecTo:'/registro',
      icon:'log-in-outline'
    },
    {
      name:'Quienes somos',
      redirecTo:'/quienes-somos',
      icon:'cafe-outline'
    },


  ]



  constructor() {}
}
