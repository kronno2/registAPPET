import { Component, OnInit } from '@angular/core';
import { ApicrudService } from 'src/app/apicrud.service';
import { LoadingController } from '@ionic/angular';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import {DatePipe}from '@angular/common'
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}


@Component({
  selector: 'app-inicio-profesor',
  templateUrl: './inicio-profesor.page.html',
  styleUrls: ['./inicio-profesor.page.scss'],
})
export class InicioProfesorPage implements OnInit {

  qrCodeString='This is a secret qr code message';
  qrFecha= 'string ';
  nombreDocente=sessionStorage.getItem('username');
  scannedResult:any;
  scannedResultDate:any;
  date=new Date();
  stringDate:string=this.date.toString()
  fechaFormateada=this.datepipe.transform(this.stringDate,' dd-MM-YYYY HH:mm')||null;

  constructor(private datepipe:DatePipe,private router: Router, private alertcontroller:AlertController) { }

  ngOnInit() {

       
   this.fechaFormateada,
   this.nombreDocente
  }

  usuario={
    modulo:'',
    fecha:`${this.fechaFormateada}`,
    docente:this.nombreDocente

  }

  cerrarSesion(){
    sessionStorage.clear();
    this.mensajeCerrar();
    this.router.navigateByUrl('/inicio');
    
  }

  async mensajeCerrar(){
    const alerta = await this.alertcontroller.create({ 
      header : 'Graciaas!',
      message : 'Hasta la próxima! :D',
      buttons : ['OK']
    })
    alerta.present();
  }

  generaScan(){
    this.qrCodeString= this.usuario.modulo;
    this.qrFecha=this.usuario.fecha;
    this.nombreDocente=this.usuario.docente;
  }

}
