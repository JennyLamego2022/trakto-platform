import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(){ }

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

}
