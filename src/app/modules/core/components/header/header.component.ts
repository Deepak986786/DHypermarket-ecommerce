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
    this.router.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem("seller") && val.url.includes("seller")){
          let sellerStore=localStorage.getItem("seller");
          let sellerData=sellerStore && JSON.parse(sellerStore);
          this.menutype="seller";
         
          this.sellerDetails =sellerData[0];

          
        }else{
          this.menutype="default";
          console.log("outside sewlller")
        }
      }
    })
  }

  logout(){
     localStorage.removeItem("seller");
     this.router.navigate(['seller']);
  }

}
