import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router'; 
import { AuthService } from 'src/app/servicios/auth.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.page.html',
  styleUrls: ['./profesor.page.scss'],
})
export class ProfesorPage implements OnInit {
  userdata: any;
  usuario = {
    id: 0,
    name: "",
    username: "",
    password: "",
    role: "",
    isactive: true,
  };

  loginpForm: FormGroup;

  constructor(private authservice: AuthService,
    private router: Router,
    private toastController: ToastController,
    private alertController: AlertController,
    private builder: FormBuilder
  ) {
    this.loginpForm = this.builder.group({
      'username': new FormControl("", [Validators.required, Validators.minLength(4)]),
      'password': new FormControl("", [Validators.required, Validators.minLength(4)]),
    });
  } 

  ngOnInit() {}
    loginp() {
      if (this.loginpForm.valid) {
        this.authservice.GetUserById(this.loginpForm.value.username).subscribe((resp) => {
          this.userdata = resp;
          console.log(this.userdata);
          if (this.userdata.length > 0) {
            this.usuario = {
              id: this.userdata[0].id,
              name: this.userdata[0].name,
              username: this.userdata[0].username,
              password: this.userdata[0].password,
              role: this.userdata[0].role,
              isactive: this.userdata[0].isactive,
            };
            console.log(resp);
            console.log(this.usuario.password);
            if (this.usuario.password === this.loginpForm.value.password && this.usuario.role === "profesor") {
              if (this.usuario.isactive) {
                sessionStorage.setItem('username', this.usuario.username);
                sessionStorage.setItem('userpassword', this.usuario.password);
                sessionStorage.setItem('ingresado', 'true');
                this.showToast('Sesión Iniciada');
                this.router.navigateByUrl('/inicio-profesor');
              } else {
                this.UserInactivo();
                console.log('Usuario inactivo, contacte a admin@app.cl');
                this.loginpForm.reset();
              }
            } else {
              this.Error();
              console.log('Credenciales incorrectas');
              this.loginpForm.reset();
            }
          } else {
            this.loginpForm.reset();
            this.NoExiste();
            console.log('Usuario no existe, contacte a alguien');
            
          }
        });
      }
    }
  
    recuperarPass(){
      this.router.navigateByUrl("/cambiar-contraseña");
    }
    async showToast(msg: any) {
      const toast = await this.toastController.create({
        message: msg,
        duration: 3000,
      });
      toast.present();
    }
  
    async UserInactivo() {
      const alerta = await this.alertController.create({
        header: 'Usuario Inactivo',
        message: 'Debe contactarse con admin@admin.cl',
        buttons: ['Ok'],
      });
      await alerta.present();
    }
  
    async Error() {
      const alerta = await this.alertController.create({
        header: 'Error..',
        message: 'Revise sus credenciales',
        buttons: ['Ok'],
      });
      await alerta.present();
    }
  
    async NoExiste() {
      const alerta = await this.alertController.create({
        header: 'Error..',
        message: 'Usuario no existe, debe registrarse',
        buttons: ['Ok'],
      });
      await alerta.present();
    }
  }