import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [],
    templateUrl: './topbar.component.html',
    styleUrl: './topbar.component.scss',
})

export class TopbarComponent {
    logOut(event: Event) {
        event?.preventDefault();
        this.loginService.logOut()
    }

    get isLoggedIn() {
        return this.loginService.isLoggedIn;
    }

    get userName() {
        return this.loginService.userName
    }

    constructor(private loginService: LoginService) {}
}
