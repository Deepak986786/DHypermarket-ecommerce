import { Component, OnInit } from '@angular/core';
import * as moment from 'moment-timezone';
import { UserService } from 'src/app/modules/user/services/user.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService) { }

  startDate = new Date();

  date:any;

  ngOnInit(): void {
  }

  categoryList = [
    { name: 'Groceries', url: 'https://rukminim1.flixcart.com/flap/92/92/image/29327f40e9c4d26b.png?q=100' },
    { name: 'Mobiles', url: 'https://rukminim1.flixcart.com/flap/92/92/image/22fddf3c7da4c4f4.png?q=100' },
    { name: 'Fashion', url: 'https://rukminim1.flixcart.com/fk-p-flap/74/74/image/0d75b34f7d8fbcb3.png?q=100' },
    { name: 'Electronics', url: 'https://rukminim1.flixcart.com/flap/74/74/image/69c6589653afdb9a.png?q=100' },
    { name: 'Home and Furniture', url: 'https://rukminim1.flixcart.com/flap/74/74/image/ab7e2b022a4587dd.jpg?q=100' },
    { name: 'Appliances', url: 'https://rukminim1.flixcart.com/fk-p-flap/74/74/image/0139228b2f7eb413.jpg?q=100' },
    { name: 'Travel', url: 'https://rukminim1.flixcart.com/flap/74/74/image/71050627a56b4693.png?q=100' },
    { name: 'Beauty,Toys & more', url: 'https://rukminim1.flixcart.com/flap/74/74/image/dff3f7adcf3a90c6.png?q=100' },


  ]

  carauselList = [
    { name: '1st', url: 'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/b076c9bff65b2d6e.png?q=20' },
    { name: '2st', url: 'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/9f2d8a698cd97710.jpg?q=20' },
    { name: '3st', url: 'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/4eed11b0faee9cec.jpg?q=20' },
  ]

  formatDate(date: any) {
    console.log("befor = ", date);
    // const utcDate = moment(date).utc();
    const udate = moment.utc(date);

    // Format the date in the desired format
    const formattedDate = udate.format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
    console.log("after - ", formattedDate);
    return formattedDate
  }

  sendRequest() {
  //   const utcDate = new Date(this.startDate.toLocaleString('en-US', { timeZone: 'UTC' }));
  // // Format the date in the desired format ('YYYY-MM-DDTHH:mm:ss.SSS[Z]')
  // const formattedDate = utcDate;
    let obj =
    {
      startDate: this.startDate.toLocaleDateString()
    };
    console.log(obj);
    console.log("UTCSTRING "+this.startDate.toUTCString());
    console.log("ISO STRING "+this.startDate.toISOString());
    console.log("local STRING "+this.startDate.toLocaleDateString());
    console.log(new Date(this.startDate.toLocaleDateString()));
    
    
    

    
    
    // this.userService.createUser(obj).subscribe(x=> console.log(x));
  }


}
