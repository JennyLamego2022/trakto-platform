import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';



type Login ={
  firstName: string;
  lastName: string;
  email: string
  access_token: string;
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


    public logar(login: HTMLInputElement, senha: HTMLInputElement): void {
          const user = {
            email: login.value,
            password: senha.value,
          }

          this._http
                // .post<Login>(`${this.apiURL}/auth/signin`,{login, senha })
                .post<Login>(`${this.apiURL}/auth/signin`,user)
                .subscribe(loginResponse => {
                  console.log(loginResponse)
                  console.log(loginResponse.access_token)
              
                });
                console.log('service')

            
    }

    getUserData() {
      // adicionar o token como um cabeçalho de autorização
      console
      const headers = new HttpHeaders().set('token', `Bearer ${access_token}`);
  
      // fazer uma chamada para a API com o token como um cabeçalho
      return this._http.get('https://api.trakto.io/document/${loginResponse.id}', { headers });
    }
}

// @Injectable({
//   providedIn: 'root'
// })



// export class ApiService {
//   public readonly apiURL = 'https://api.trakto.io/auth/signin'

//   constructor(
//     private _http: HttpClient,
//     private _router: Router) { }

//     public logar = (...) => {
//       // ...
//       this._http
//             .post<Business>(
//               `${this.apiURL}/business/${...}/${...}`,
//               logar,
//               {
//                 headers: {
//                   'Content-Type': 'application/json',
//                    'X-API-Key': 'sua_api_key_aqui'
//                 },
//               },
//             )
//             .pipe();
//       }
//       // ...
//       }

    // logar(usuario: IUsuario) : Observable<any> {
    //   return this.mockUsuarioLogin(usuario).pipe(tap((resposta) => {
    //     if(!resposta.sucesso) return;
    //     localStorage.setItem('token', btoa(JSON.stringify("TokenQueSeriaGeradoPelaAPI")));
    //     localStorage.setItem('usuario', btoa(JSON.stringify(usuario)));
    //     this.router.navigate(['']);
    //   }));
    // }


  // private mockUsuarioLogin(usuario: IUsuario): Observable<any> {
  //   var retornoMock: any = [];
  //   if(usuario.email === "dev@trakto.io" && usuario.senha == "suasenha"){
  //     retornoMock.sucesso = true;
  //     retornoMock.usuario = usuario;
  //     retornoMock.token = "TokenQueSeriaGeradoPelaAPI";
  //     return of(retornoMock);
  //   }
  //   retornoMock.sucesso = false;
  //   retornoMock.usuario = usuario;
  //   return of(retornoMock);
  // }

  // get obterUsuarioLogado(): IUsuario {
  //   return localStorage.getItem('usuario')
  //     ? JSON.parse(atob(localStorage.getItem('usuario')))
  //     : null;
  // }
  // get obterIdUsuarioLogado(): string {
  //   return localStorage.getItem('usuario')
  //     ? (JSON.parse(atob(localStorage.getItem('usuario'))) as IUsuario).id
  //     : null;
  // }
  // get obterTokenUsuario(): string {
  //   return localStorage.getItem('token')
  //     ? JSON.parse(atob(localStorage.getItem('token')))
  //     : null;
  // }
  // get logado(): boolean {
  //   return localStorage.getItem('token') ? true : false;
  // }
// }



  // login(username: string, password: string, apiKey: string) {
  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${apiKey}`);
  //   const body = { username, password };
  //   return this.http.post(LOGIN_URL, body, { headers });
  // }


  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'X-API-Key': 'sua_api_key_aqui'
  //   })
  // }

  // CreateBug(data): Observable<Bug> {
  //   return this.http
  //     .post<Bug>(
  //       this.baseUrl + '/bugtracking/',
  //       JSON.stringify(data),
  //       this.httpOptions
  //     )
  //     .pipe(retry(1), catchError(this.errorHandl));
  // }


  // myMethodPost() {
  //   const myData = {
  //     email: "dev@trakto.io",
  //     password: "suasenha" };
  //   const config = {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'X-API-Key': 'sua_api_key_aqui'
  //     }
  //   };
  //   return axios.post('https://api.postman.com/collections', myData, config);
  // }

  // myMethodGet() {
  //   const myData = {
  //     email: "dev@trakto.io",
  //     password: "suasenha" };
  //   const config = {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'X-API-Key': 'sua_api_key_aqui'
  //     }
  //   };
  //   return axios.get('https://api.trakto.io/auth/signin', myData, config);
  // }
// }
