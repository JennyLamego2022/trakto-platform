import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';



type Login ={
  firstName: string;
  email: string;
  access_token: string;
  id: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public readonly apiURL = 'https://api.trakto.io'

    constructor(
      private _http: HttpClient,
      private _router: Router
    ) {}


 
  saveData(data: Login): void {
    localStorage.setItem('userInformations', JSON.stringify(data));
  }
    
  recoverData(): Login | null {
    const userInformations = localStorage.getItem('userInformations');
    if (!userInformations) return null;
    return JSON.parse(userInformations) as Login;
  }

   
  getUserData() {
    const userData = this.recoverData() as Login;
    const headers = { Authorization: `Bearer ${userData.access_token}` };
    return this._http.get('https://api.trakto.io/document?total_per_page=10&order_by=title&order_orientation=desc', { headers })
      .subscribe(result => {
      console.log(result);
      });
  }
  
  
  public logar(login: HTMLInputElement, senha: HTMLInputElement): void {
    const user = {
      email: login.value,
      password: senha.value,
    }
    this._http
      .post<Login>(`${this.apiURL}/auth/signin`, user)
      .subscribe(loginResponse => {
        const { firstName, email, access_token, id } = loginResponse;
        this.saveData({ firstName, email, access_token, id });
        this._router.navigate(['/abertura']);
      },

      error => {
        alert("Erro ao fazer login, confira seus dados.");
        console.log('erro de Login', error)
      });
        console.log('service');
  }
}
