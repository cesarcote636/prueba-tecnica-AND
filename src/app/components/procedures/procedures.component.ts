import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-procedures',
  templateUrl: './procedures.component.html',
  styleUrls: ['./procedures.component.css']
})
export class ProceduresComponent implements OnInit{
  apiProcedure: any;
  apiTramite: any;
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('https://api-interno.www.gov.co/api/ficha-tramites-y-servicios/secciones/los-mas-consultados-en-home')
      .subscribe((data: any) => {
        this.apiProcedure = data.data;
      });

    this.http.get('https://api-interno.www.gov.co/api/ficha-tramites-y-servicios/LoMasConsultado/ObtenerLoMasConsultado')
      .subscribe((data: any) => {
        this.apiTramite = data.data;
      });
  }
}
