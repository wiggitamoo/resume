import { Component, OnInit } from '@angular/core';
import {ExperienceService} from '../experience.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.scss']
})
export class ExperienceListComponent implements OnInit {

  experiences: Observable<any[]>;

  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
    this.experiences = this.experienceService.getData();
  }

}
