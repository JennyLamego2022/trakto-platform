import { ApiService, Design } from 'src/app/api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-material-didatico',
  templateUrl: './material-didatico.component.html',
  styleUrls: ['./material-didatico.component.css','./mq-material-didatico.component.css', './carousel-material-didatico.component.css', './mq-carousel-material-didatico.component.css']
})


export class MaterialDidaticoComponent implements OnInit {

  @ViewChild('myScrollableElement', { static:false}) myScrollableElement:any;
  @ViewChild('myScrollableElement2', { static:false}) myScrollableElement2:any;

  titulo: string | undefined;
  templates?: { title: string; image: string; }[];

  constructor(
    private ApiService: ApiService,
    private _http: HttpClient){

  }

  design: Design = {
    id: '',
    thumbs: '',
    title: '',
    updated_at: ''
  }


  ngOnInit(): void {

    this.ApiService.getUserData();

    this.ApiService.getTemplates10('design', 10).subscribe(result => {
      this.templates = result;
      console.log(this.templates)
    });

  }



  onButtonClick(){
    const scrollable = this.myScrollableElement.nativeElement;
    scrollable.scrollLeft += 1000;
    }

  offButtonClick(){
    const scrollable = this.myScrollableElement.nativeElement;
    scrollable.scrollLeft -= 1000;
    }
  onButtonClick2(){
    const scrollable = this.myScrollableElement2.nativeElement;
    scrollable.scrollLeft += 1000;
    }

  offButtonClick2(){
    const scrollable = this.myScrollableElement2.nativeElement;
    scrollable.scrollLeft -= 1000;
    }

  }


