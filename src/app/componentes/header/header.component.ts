import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css','./mq-header.component.css']
})
export class HeaderComponent {

  botaoAtivo = true;

  dropdownToggle(){
    this.botaoAtivo = !this.botaoAtivo;
    console.log("ok")
  }


  today: any;

  constructor(private datePipe: DatePipe){
    this.today = this.datePipe.transform(new Date(), 'dd/MM/yyyy');
  }

}
