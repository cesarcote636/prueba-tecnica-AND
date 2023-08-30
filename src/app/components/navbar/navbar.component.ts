import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  apiNavbar: any;
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('https://api-interno.www.gov.co/api/home/BannerInformativo')
      .subscribe((data: any) => {
        this.apiNavbar = data.data;
      });
  }
}
