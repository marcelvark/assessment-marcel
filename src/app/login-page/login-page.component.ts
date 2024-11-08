import { Component } from '@angular/core';
import { FormsModule, FormGroup } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login-page',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
    username: string = '';
    password: string = '';

    triedLogIn: boolean = false; // to hide login error after reload

    onSubmit() {
        this.triedLogIn = true;
        this.loginService.logIn(this.username, this.password);
    }

    constructor(public loginService: LoginService, private router: Router) {}
}
