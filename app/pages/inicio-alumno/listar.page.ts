import { Component, OnInit } from '@angular/core';
import { ApicrudService } from 'src/app/apicrud.service';
import { LoadingController } from '@ionic/angular';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit{

  datoScaneados = '';

  usuario = {
    id:0,
    name:'',
    username: '',
    password:'', 
    role:'',
    isactive: false
  }

  constructor(private animalitoService: ApicrudService,
    private loadingCtrl : LoadingController,
    private barcodeScanner: BarcodeScanner, 
    private alertcontroller: AlertController,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }
  


  async mensajeCerrar(){
    const alerta = await this.alertcontroller.create({ 
      header : 'Graciaas!',
      message : 'Hasta la próxima! :D',
      buttons : ['OK']
    })
    alerta.present();
  }

  scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.datoScaneados = barcodeData.text;
    }).catch(err => {
      console.log('Error al escanear', err);
    });
  }


  ionViewWillEnter() {
    this.getUsuarioById(this.getIdFromUrl());
  }

  getIdFromUrl() {
    let url = this.router.url;
    let arr = url.split("/", 3);
    console.log(arr);
  
    let idString = sessionStorage.getItem('id');
    console.log(idString);
  
    // Verificar si idString no es null o undefined antes de convertirlo a un número
    let id = idString ? parseInt(idString, 10) : NaN;
    console.log(id);
  
    return id;
  }
  

  getUsuarioById(usuarioID:number){
    this.authService.BuscarUsuarioId(usuarioID).subscribe(
    (resp: any) => {
      console.log(resp)
      if (resp && resp.length > 0) {
        this.usuario = {
          id: resp[0].id,
          name: resp[0].name,
          username: resp[0].username,
          password: resp[0].password,
          role: resp[0].role,
          isactive: resp[0].isactive,
        };
      } else {
        // Manejar respuesta vacía o indefinida
        console.error('Respuesta vacía o indefinida');
      }
    }
    )
  }
}


