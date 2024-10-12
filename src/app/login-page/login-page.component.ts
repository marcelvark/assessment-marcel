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
    // loggedIn: boolean = true;
    username: string = '';
    password: string = '';

    triedLogIn: boolean = false; // to hide login error after reload

    onSubmit() {
        this.triedLogIn = true;
        this.loginService.logIn(this.username, this.password);

        /*
            Tried moving the routing out of login.service.ts, 
            but did not get logIn2 to return a boolean for success or false.

        this.loginService
            .logIn2(this.username, this.password)
            .subscribe((response: any) => {
                this.triedLogIn = true;
                if (response.success) {
                    this.router.navigate(['/dashboard']);
                }
            });
        */
    }

    constructor(public loginService: LoginService, private router: Router) {}
}
