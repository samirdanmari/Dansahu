import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { window } from 'rxjs';
import { AccountDetails } from 'src/api/account-details';


@Component({
  selector: 'app-scan',
  templateUrl: './receive.component.html',
  styleUrls: ['./receive.component.scss']
})
export class ReceiveComponent {

  //new settings to initializa firebase
  @Input() Accountdetails : AccountDetails | null=null;
  @Output() edit = new EventEmitter <AccountDetails>();
  

  private code: string = '';
  qrcode = true;
  Scanning: string = 'Scanning'

  showSpinner = false;
  loadData(){
    this.qrcode = false;
    this.showSpinner = true;
    setTimeout(() => {

      this.showSpinner = false;
      this.qrcode = true;
    }, 5000)
  }
  
//create connection between the app and camera
qrCodeValue='';

ngOninit(){
  this.setQRData();
}

    setQRData(){
      const items = [{
        'First Name': 'Samir',
        'Last Name': 'danmari',
        'Author At': 'samirdanmari.com',
        'email': 'samirdanmari9@gmail.com',
        'Top Article': 'Angular Scanner',
        'Years Of Experience': '3 years',
      }];
      this.qrCodeValue = JSON.stringify(items);
    }

  //close the connection while the payment is success if failed allow show try again alert and start with Scanning again
  ngOnDestroy(){
    this.setQRData();  
  }
}
