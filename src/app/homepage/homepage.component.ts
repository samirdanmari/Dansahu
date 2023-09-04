import { Component } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { MatDrawerContainer } from '@angular/material/sidenav';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  showFiller = false;
  notifications = 3;
  spinerRange = 68;
  openNavbar = false;
  balance: number = 2000;
}
