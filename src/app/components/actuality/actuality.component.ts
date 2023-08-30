import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-actuality',
  templateUrl: './actuality.component.html',
  styleUrls: ['./actuality.component.css']
})
export class ActualityComponent implements OnInit{
  apiActuality: any;
  apiCategorias: any;
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('https://api-interno.www.gov.co/api/noticias/secciones/actualidad-general')
      .subscribe((data: any) => {
        this.apiActuality = data.data;
      });
    this.http.get('https://api-interno.www.gov.co/api/noticias/Noticias/categorias/0')
      .subscribe((data: any) => {
        this.apiCategorias = data.data;
      });
  }
}
