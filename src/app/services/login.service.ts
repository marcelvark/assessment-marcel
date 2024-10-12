import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';

/**
 * Mockup data and -functionality for loggin in.
 */
const MOCKUP = {
    successData: {
        data: {
            id: 'test',
            username: 'Marcel',
            level: 1,
            previousLogin: '0000-00-00T00:00:00.0000000',
            token: 'test',
            tokenExpiry: '0000-00-00T00:00:00.0000000Z',
            refreshToken: 'test',
            refreshTokenExpiry: '0000-00-00T00:00:00.0000000Z',
            state: 1,
        },
        success: true,
        performanceCost: 5141,
        source: ' - DEBUG',
        statusCode: 200,
        resultMessages: [
            {
                code: 200,
                message: 'Ok',
                innerMessage: null,
            },
        ],
    },

    failedData: {
        data: {
            id: null,
            username: '',
            level: 0,
            previousLogin: null,
            token: '',
            tokenExpiry: '0001-01-01T00:00:00',
            refreshToken: '',
            refreshTokenExpiry: '0001-01-01T00:00:00',
            state: 0,
            tenantRights: null,
        },
        success: false,
        performanceCost: 6908,
        source: ' - DEBUG',
        statusCode: 5000,
        resultMessages: [
            {
                code: 7,
                message: 'Username or password is incorrect.',
                innerMessage: null,
            },
        ],
    },

    storageKey: 'MOCKUP_LOGIN_DATA',

    /**
     * Mockup for logging in.
     * @param userName Use 'marcel' to simulate a successful log in.
     * @param password N/A
     * @returns Mockup log in data.
     */
    logIn(userName: string, password: string): Promise<object> {
        return new Promise(function (resolve) {
            setTimeout(() => {
                if (userName == 'marcel') resolve(MOCKUP.successData);
                else resolve(MOCKUP.failedData);
            }, 500);
        });
    },
};

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    /**
     * Stores server-returned login data.
     */
    get loginData(): any {
        const data = sessionStorage.getItem(MOCKUP.storageKey);
        if (data) return JSON.parse(data);
        else return null;
    }
    set loginData(data) {
        if (data == null) sessionStorage.removeItem(MOCKUP.storageKey);
        else sessionStorage.setItem(MOCKUP.storageKey, JSON.stringify(data));
    }

    /**
     * Handles user log in, routing to the dashboard on success.
     * @param userName 
     * @param password 
     */
    logIn(userName: string, password: string) {
        const data = from(MOCKUP.logIn(userName, password));

        data.subscribe((response) =>{
            this.loginData = response

            if (this.loginData.success) {
                this.loginData = MOCKUP.successData;
                this.router.navigate(['/dashboard']);
            } else {
                this.loginData = MOCKUP.failedData;
            }
        })
    }

    /*
        Tried moving the routing out of login.service.ts, 
        but did not get logIn2 to return a boolean for success or false.

    logIn2(userName: string, password: string): Observable<object> {
        const observable = from(MOCKUP.logIn(userName, password));

        observable.subscribe((response) => {
            this.loginData = response
        })

        return observable;
    }
    */

    /**
     * Logs out the user, and navigates to the login page.
     */
    logOut() {
        this.loginData = null;
        this.router.navigate(['/login']);
    }

    /**
     * Indicates whether a user is logged in.
     */
    get isLoggedIn() {
        return this.loginData?.success || false;
    }

    /**
     * Indicates whether the last log in attempt failed.
     */
    get loginFailed() {
        if (this.loginData?.success == false) return true;
        else return false;
    }

    /**
     * Returns the user name for the logged in user, or otherwise an empty string.
     */
    get userName() {
        return this.loginData?.data.username || '';
    }

    constructor(private router: Router) {}
}
