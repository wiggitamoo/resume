import { Component } from '@angular/core';
import { AuthService } from './core/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app';
    YEAR = new Date().getFullYear();

    constructor(private auth: AuthService) {
    }
}
