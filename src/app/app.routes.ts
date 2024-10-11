import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';

export const routes: Routes = [
    // {
    //     path: '', redirectTo: 'login', pathMatch: 'full'
    // },
    {
        path: 'login',
        title: 'Q90 - Login',
        component: LoginPageComponent,
    },
    {
        path: 'dashboard',
        title: 'Q90 - Dashboard',
        component: DashboardPageComponent,
    },
    // {
    //     path: 'signup',
    //     title: 'Q90 - Signup',
    //     component: SignUpPageComponent,
    // },
];
