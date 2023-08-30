import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.css']
})
export class MainBannerComponent implements OnInit{
  apiMain: any;
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('https://api-interno.www.gov.co/api/home/BannerPrincipal')
      .subscribe((data: any) => {
        this.apiMain = data.data;
      });
  }
}
