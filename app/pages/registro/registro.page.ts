import { Component,OnInit } from "@angular/core";
import {  Users } from "../interfaces/interface";
import { ApicrudService } from "src/app/apicrud.service";
import { Router } from "@angular/router";




@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  nuevoUser: Users={
    name:"",
    username: "",
    password: "",
    role: "",
    pregunta: "",
    respuesta: ""    
  }

  constructor(private apiCrud: ApicrudService,
              private router: Router) { }

  ngOnInit() {
  }

  crearUser(){
    this.apiCrud.crearUser(this.nuevoUser).subscribe((resp)=>{
      this.router.navigateByUrl("/login");
    });
  }
  role=undefined
  handleChange(ev:any){
    this.role=ev.target.value
  }


  
}
