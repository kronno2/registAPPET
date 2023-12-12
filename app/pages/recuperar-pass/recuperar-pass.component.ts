import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';
import { ApicrudService } from "src/app/apicrud.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-recuperar-pass',
  templateUrl: './recuperar-pass.component.html',
  styleUrls: ['./recuperar-pass.component.scss'],
})
export class RecuperarPassComponent  implements OnInit {

  datos: any = {
    username: '',
    pregunta: '',
    respuesta: '',
    pass: ''
  }
  RespUser: any = {}
  verPreguntaSeguridad: boolean = false;
  msgError1: boolean = false;
  cambiarPass: boolean = false;
  msgError2: boolean = false;
  constructor(    private authservice: AuthService, private apiCrud: ApicrudService, private router: Router ) { }

  ngOnInit() {}

  get valido(): boolean {
    // Retorna true si datos.nombre no es una cadena vacía
    return this.datos.nombre !== '';
  }

  buscarUsuario(){
    console.log("buscando: ", this.datos.username);
    this.authservice.GetUserById(this.datos.username).subscribe((resp) => {
      this.RespUser = resp;
      if(this.RespUser.length != 0){
        console.log("entrando: ", this.RespUser);
        this.verPreguntaSeguridad = true;
        this.msgError1 = false;
      }else{
        this.msgError1 = true;
      }
    });
  }
  validarRespuesta(){

    // console.log(this.RespUser[0].pregunta, this.datos.pregunta, this.RespUser.respuestal, this.datos.respuesta  );
    if(this.RespUser[0].pregunta == this.datos.pregunta && this.RespUser[0].respuesta == this.datos.respuesta){
      this.cambiarPass = true;
      this.msgError2 = false;
    
    }else{
      this.msgError2 = true;  
      this.cambiarPass = false;
    }

  }
  cambiarPassword(){
    this.RespUser[0].password = this.datos.pass
    this.apiCrud.cambiasPassword(this.RespUser[0]).subscribe((resp)=>{
      this.router.navigateByUrl("/login");
    });
    console.log("Cambiando Contraseña");
  }
}
