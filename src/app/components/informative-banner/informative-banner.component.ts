import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-informative-banner',
  templateUrl: './informative-banner.component.html',
  styleUrls: ['./informative-banner.component.css']
})
export class InformativeBannerComponent implements OnInit{
  apiBanner: any;
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('https://api-interno.www.gov.co/api/home/BannerInformativo')
      .subscribe((data: any) => {
        this.apiBanner = data.data;
      });
  }
}
