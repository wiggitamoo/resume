import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SideNavService } from './side-nav.service';

@Component({
    selector: 'side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit, AfterViewInit {
    @ViewChild('sidenav') public sidenav: MatSidenav;
    navMode = 'side';

    constructor(private sideNavService: SideNavService) {
    }

    ngOnInit() {
        setTimeout(() => {
            this.checkSideNav();
        });
    }

    ngAfterViewInit() {
        this.sideNavService.sideNavToggleSubject.subscribe(() => {
            this.sidenav.toggle();
        });
    }

    checkSideNav(event?) {
        if(event) {
            if (event.target.innerWidth < 768) {
                this.navMode = 'over';
                this.sidenav.close();
            } else {
                this.navMode = 'side';
                this.sidenav.open();
            }
        } else {
            if (window.innerWidth < 768) {
                this.navMode = 'over';
                this.sidenav.close();
            } else {
                this.navMode = 'side';
                this.sidenav.open();
            }
        }
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.checkSideNav(event);
    }

}
