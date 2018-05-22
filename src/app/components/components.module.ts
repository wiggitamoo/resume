import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EducationListComponent} from './education/education-list/education-list.component';
import {ExperienceListComponent} from './experience/experience-list/experience-list.component';
import {SkillListComponent} from './skill/skill-list/skill-list.component';
import {EducationService} from './education/education.service';
import {ExperienceService} from './experience/experience.service';
import {SkillService} from './skill/skill.service';
import {MomentModule} from 'angular2-moment';

@NgModule({
    imports: [
        CommonModule,
        MomentModule
    ],
    declarations: [
        EducationListComponent,
        ExperienceListComponent,
        SkillListComponent
    ],
    providers: [
        EducationService,
        ExperienceService,
        SkillService
    ],
    exports: [
        EducationListComponent,
        ExperienceListComponent,
        SkillListComponent
    ]
})
export class ComponentsModule {
}
