import { Component } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { SideNavService } from '../side-nav/side-nav.service';

@Component({
    selector: 'main-nav',
    templateUrl: './main-nav.component.html',
    styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {

    constructor(public auth: AuthService, public sideNavService: SideNavService) {
    }
}
