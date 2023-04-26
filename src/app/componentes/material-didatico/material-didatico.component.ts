import { ApiService } from 'src/app/api.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-material-didatico',
  templateUrl: './material-didatico.component.html',
  styleUrls: ['./material-didatico.component.css','./mq-material-didatico.component.css', './carousel-material-didatico.component.css', './mq-carousel-material-didatico.component.css']
})
export class MaterialDidaticoComponent implements OnInit {

  @ViewChild('myScrollableElement', { static:false}) myScrollableElement:any;

  constructor(private ApiService: ApiService){}

  ngOnInit(): void {

    this.ApiService.getUserData();

  }


  onButtonClick(){
    const scrollable = this.myScrollableElement.nativeElement;
    scrollable.scrollLeft += 1000;
    }

  offButtonClick(){
    const scrollable = this.myScrollableElement.nativeElement;
    scrollable.scrollLeft -= 1000;
    }

    

  }


