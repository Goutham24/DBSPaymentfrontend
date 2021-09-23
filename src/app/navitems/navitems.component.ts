import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/service/localStorage.service';

@Component({
  selector: 'app-navitems',
  templateUrl: './navitems.component.html',
  styleUrls: ['./navitems.component.css']
})
export class NavitemsComponent implements OnInit {

  navitems:any;
  companyDetails:any     

  constructor(public storageService:LocalStorageService,private router:Router) { 
    this.companyDetails={
      name:'DBS',
      logo:"https://www.dbs.com.hk/personal/landing/investment-goal-calculators/monthly_investment_calculator/images/logo.png"
  }
    this.navitems = [{
      text: "Login",
      link: "login"
    },
    {
      text: "Transfer",
      link: "transfer"
    },
    {
      text:"Transactions",
      link:"transactions"
    }
  ]
  }

  ngOnInit(): void {
  }

  handleLogout(){
    console.log("Logout button clicked");
    this.storageService.remove('token');
    this.storageService.remove('customer');
    this.router.navigate(['/login']);
  }

}
