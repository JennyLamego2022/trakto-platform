import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService, Design } from 'src/app/api.service'

@Component({
  selector: 'app-ver-todos',
  templateUrl: './ver-todos.component.html',
  styleUrls: ['./ver-todos.component.css']
})


export class VerTodosComponent implements OnInit{



  templates: { title: string; image: string; }[] | undefined;

  constructor(private ApiService: ApiService,
    private _http: HttpClient) {  }

    design: Design = {
      id: '',
      thumbs: '',
      title: '',
      updated_at: ''
    }


  ngOnInit(): void {
    this.ApiService.getUserData();



    this.ApiService.getTemplates('design').subscribe(result => {
      this.templates = result;
      console.log(this.templates)
    });

  }
}


