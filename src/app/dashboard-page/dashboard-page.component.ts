import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent {
  userName: string = ''

  constructor(public loginService: LoginService) {
    this.userName = loginService.userName
  }
}
