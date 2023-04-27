import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header-light',
  templateUrl: './header-light.component.html',
  styleUrls: ['./header-light.component.css', './mq-header-light.component.css']
})
export class HeaderLightComponent {

  botaoAtivo = true;
  botaoAtivo1 = true;

  dropdownToggle1(){
    this.botaoAtivo1 = !this.botaoAtivo1;
    console.log('teste')
  }
  dropdownToggle(){
    this.botaoAtivo = !this.botaoAtivo;
    console.log('teste')
  }


  today: any;

  constructor(private datePipe: DatePipe){
    this.today = this.datePipe.transform(new Date(), 'dd/MM/yyyy');
  }

}
