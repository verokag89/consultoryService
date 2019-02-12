import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../shared/dashboard.service';
import { Dashboard } from '../types/dashboard.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [ DashboardService]
})
export class DashboardComponent implements OnInit {


  public totals: Dashboard;

  constructor(public dashboardService : DashboardService) { }

  //totals= Dashboard;
  
  ngOnInit() {


    this.dashboardService.getTotals().then((res: any) => {
      this.totals = res;
    }).catch(err => {

      });

  }


}
