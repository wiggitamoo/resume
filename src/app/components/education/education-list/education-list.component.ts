import {Component, OnInit} from '@angular/core';
import {EducationService} from '../education.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'education-list',
    templateUrl: './education-list.component.html',
    styleUrls: ['./education-list.component.scss']
})
export class EducationListComponent implements OnInit {

    educations: Observable<any[]>;
    educationHidden: Boolean = true;

    constructor(private educationService: EducationService) {
    }

    ngOnInit() {
        this.educations = this.educationService.getData();
    }

}
