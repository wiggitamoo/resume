import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {SkillService} from '../../skill/skill.service';

@Component({
  selector: 'skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit {

    skills: Observable<any[]>;
    skillsHidden: Boolean = true;

    constructor(private skillService: SkillService) { }

    ngOnInit() {
        this.skills = this.skillService.getData();
    }

}
