import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
    selector: 'app-login-page',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
    loggedIn: boolean = true;
    username: string = '';
    password: string = '';

    triedLogIn: boolean = false; // to hide login error after reload

    signIn() {
        this.triedLogIn = true;
        this.loginService.logIn(this.username, this.password);
    }

    constructor(public loginService: LoginService) {}
}
