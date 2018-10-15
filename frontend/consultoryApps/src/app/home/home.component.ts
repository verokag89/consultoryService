import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {

  constructor(private config: NgbCarouselConfig) {
    this.config.interval = 5000;
    this.config.pauseOnHover= false;
    this.config.keyboard= false;
    this.config.wrap = true;

   }

  ngOnInit() {
  }

}

