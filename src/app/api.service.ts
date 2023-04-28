import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';



type Login ={
  firstName: string;
  email: string;
  access_token: string;
  id: string;
}

export interface Design {
  id: string;
  thumbs: string;
  title: string;
  updated_at: string;
}

export interface Document {
  id: string;
  title: string;
  thumbs: {
    raw: string;
    medium: string;
    high: string;
    low: string;
  };
}

@Injectable({
  providedIn: 'root',
})


export class ApiService {
  public readonly apiURL = 'https://api.trakto.io';
  public readonly apiURL2 = `https://api.trakto.io/document/`;


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


  getTemplates(design: string): Observable<{ title: string, image: string }[]> {
    const userData = this.recoverData() as Login;
    const headers = { Authorization: `Bearer ${userData.access_token}`, Accept: 'application/json' };

    return this._http.get<{ data: Document[] }>('https://api.trakto.io/document?total_per_page=10&order_by=title&order_orientation=desc&title=', { headers })
      .pipe(map(result => {
        const data = result.data;
        return data.map(item => ({ title: item.title, image: item.thumbs.high }));
      }));
  }


  getTemplates10(design: string, limit: number): Observable<{ title: string, image: string, id: string }[]> {
    const userData = this.recoverData() as Login;
    const headers = { Authorization: `Bearer ${userData.access_token}`, Accept: 'application/json' };

    return this._http.get<{ data: Document[] }>('https://api.trakto.io/document?total_per_page=10&order_by=title&order_orientation=desc&title=', { headers })
      .pipe(map(result => {
        const data = result.data;
        return data.map(item => ({ title: item.title, image: item.thumbs.high, id: item.id }));
      })).pipe(map(items => items.slice(0, 10)));
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
        console.log(loginResponse)
      },

      error => {
        alert("Erro ao fazer login, confira seus dados.");
        console.log('erro de Login', error)

      });
  }
}
