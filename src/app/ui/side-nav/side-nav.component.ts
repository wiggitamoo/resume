import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SideNavService } from './side-nav.service';

@Component({
    selector: 'side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements AfterViewInit {
    @ViewChild('sidenav') public sidenav: MatSidenav;

    constructor(private sideNavService: SideNavService) {
    }

    ngAfterViewInit() {
        this.sideNavService.sideNavToggleSubject.subscribe(() => {
            this.sidenav.toggle();
        });
    }

}
