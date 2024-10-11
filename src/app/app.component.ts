import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { TopbarComponent } from './topbar/topbar.component';
import { LoginService } from './services/login.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, TopbarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    constructor(public loginService: LoginService, private router: Router) {
        if (this.loginService.isLoggedIn) this.gotoDashboardPage();
        else this.gotoLoginPage();
    }

    gotoLoginPage() {
        this.router.navigate(['/login']);
    }

    gotoDashboardPage() {
        this.router.navigate(['/dashboard']);
    }
}
