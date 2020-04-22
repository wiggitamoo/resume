import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationListComponent } from './education/education-list/education-list.component';
import { ExperienceListComponent } from './experience/experience-list/experience-list.component';
import { SkillListComponent } from './skill/skill-list/skill-list.component';
import { EducationService } from './education/education.service';
import { ExperienceService } from './experience/experience.service';
import { SkillService } from './skill/skill.service';
import { HighchartsChartModule } from 'highcharts-angular';
import { SkillChartComponent } from './skill/skill-chart/skill-chart.component';
import { MomentModule } from 'ngx-moment';

@NgModule({
    imports: [CommonModule, MomentModule, HighchartsChartModule],
    declarations: [
        EducationListComponent,
        ExperienceListComponent,
        SkillListComponent,
        SkillChartComponent
    ],
    providers: [EducationService, ExperienceService, SkillService],
    exports: [
        EducationListComponent,
        ExperienceListComponent,
        SkillListComponent
    ]
})
export class ComponentsModule {}
