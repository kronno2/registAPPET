import { Injectable } from '@angular/core';
import { Router, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../servicios/auth.service';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class AutorizadoGuard {

  constructor(private authservice: AuthService,
              private toast: ToastController,
              private router: Router){}


              canActivate(): 
              | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
                  if(!this.authservice.IsLoggedIn()){
                    this.showToast('Debe iniciar sesión!');
                    this.router.navigate(['/login']);
                    return false;
              }
                 // logged in, so return true
                this.authservice.IsLoggedIn();
                return true;
      }

    async showToast(msg: any) {
       const toast = await this.toast.create({
          message: msg,
          duration: 3000
        });
        toast.present();
      }
  }
    