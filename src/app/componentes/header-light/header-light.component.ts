import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header-light',
  templateUrl: './header-light.component.html',
  styleUrls: ['./header-light.component.css']
})
export class HeaderLightComponent {

  botaoAtivo = true;

  dropdownToggle(){
    this.botaoAtivo = !this.botaoAtivo;
    
  }


  today: any;

  constructor(private datePipe: DatePipe){
    this.today = this.datePipe.transform(new Date(), 'dd/MM/yyyy');
  }

}
