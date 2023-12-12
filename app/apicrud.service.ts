import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUsuariop, Users } from './pages/interfaces/interface';
import { environment } from 'src/environments/environment';
import { IUsuario } from './pages/interfaces/interface';  
@Injectable({
  providedIn: 'root'
})
export class ApicrudService {

  constructor(private httpclient:HttpClient) { }
  listarUsuario():Observable<IUsuariop>{
    return this.httpclient.get<IUsuariop>(`${environment.apiUrl}/usuario`);
  }
  crearUser(newAnimalito: Users): Observable<Users>{
    return this.httpclient.post<Users>(`${environment.apiUrl}/usuarios`, newAnimalito);
  }

    checkUsernameExists(username: string): Observable<boolean> {
    return this.httpclient.get<boolean>(`${environment.apiUrl}/usuarios/exists/${username}`);
  }

  cambiasPassword(newPass: any):Observable<Users>{
    return this.httpclient.put<Users>(`${environment.apiUrl}/usuarios/${newPass.id}`, newPass);
  }
}
