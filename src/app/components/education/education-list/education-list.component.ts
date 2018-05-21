import {Component, OnInit} from '@angular/core';
import {EducationService} from '../education.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'education-list',
  templateUrl: './education-list.component.html',
  styleUrls: ['./education-list.component.scss']
})
export class EducationListComponent implements OnInit {

  education: Observable<any[]>;

  constructor(private educationService: EducationService) { }

  ngOnInit() {
    // this.education = this.educationService.getData();
  }

}
