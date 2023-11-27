import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { sellerType } from 'src/app/modules/models/data-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  menutype="default";
  sellerDetails:sellerType | undefined;
  
  ngOnInit(): void {
   
  }

  logout(){
     localStorage.removeItem("seller");
     this.router.navigate(['seller']);
  }

}
