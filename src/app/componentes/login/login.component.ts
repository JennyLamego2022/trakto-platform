import { ApiService } from './../../api.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  momentForm!: FormGroup;
 
  constructor( 
    private ApiService: ApiService) {}

  ngOnInit(): void {
    this.momentForm = new FormGroup({
      id: new FormControl(''),
      email: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required]),

     })
  }

  get email (){
    return this.momentForm.get('email')!;
  }
  get senha (){
    return this.momentForm.get('senha')!;
  }

  submit() {
    if (this.momentForm.invalid) {
      return ;
    }
}


  label1Color: string = '#04183E';
  label2Color: string = '#04183E';

  onInputFocus(inputId: string){
    switch (inputId){
      case 'input1':
        this.label1Color = '#0095FF';
        break;

      case 'input2':
        this.label2Color = "#0095FF";
        break;
    }
  }

  onInputBlur(inputId:string){
    switch (inputId){
      case 'input1':
        this.label1Color= '#04183E';
        break;

      case 'input2':
        this.label2Color='#04183E'
        break;
    }
  }


  textBtn = 'Entrar'
  botaoAtivo = true;

  entrar(){
    if (this.momentForm.valid){
      this.textBtn = 'Entrando...';
      this.botaoAtivo = !this.botaoAtivo;

      const inputEmail: HTMLInputElement | null = document.querySelector('#input1');
      const inputSenha: HTMLInputElement | null = document.querySelector('#input2');
      console.log(inputEmail!.value)
      
      this.ApiService.logar(inputEmail!, inputSenha!);
      console.log(this.ApiService.logar(inputEmail!, inputSenha!));
    }
  }

}
