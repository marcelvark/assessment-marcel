import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';

export const routes: Routes = [
    {
        path: 'login',
        title: 'Login',
        component: LoginPageComponent,
    },
    {
        path: 'dashboard',
        title: 'Dashboard',
        component: DashboardPageComponent,
    },
];
