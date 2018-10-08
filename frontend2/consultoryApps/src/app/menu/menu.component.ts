
import {Component, OnInit, ElementRef, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

 
  constructor(
    private _element: ElementRef<HTMLElement>) {}

  ngOnInit() {
  }
}
 
