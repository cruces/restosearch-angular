import {Component, OnInit} from '@angular/core';
import {AuthService} from '../core/services/auth.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    profile: any;

    constructor(public auth: AuthService) {
    }

    ngOnInit() {
        if (this.auth.userProfile) {
            this.profile = this.auth.userProfile;
            console.log(this.profile);
        } else {
            this.auth.getProfile((err, profile) => {
                this.profile = profile;
                console.log(this.profile);
            });
        }
    }

}