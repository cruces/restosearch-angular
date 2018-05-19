import {Component, HostListener} from '@angular/core';
import {AuthService} from '../../core/services/auth.service';

declare const window: any;

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    isScrolled = false;

    constructor(public auth: AuthService) {
        auth.handleAuthentication();
    }

    @HostListener('window:scroll', [])
    onWindowScroll() {
        const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        this.isScrolled = number > 100;
    }

    login() {
        this.auth.login();
    }

    logout() {
        this.auth.logout();
    }

}
