import {
    AfterViewInit,
    Component,
    ElementRef,
    OnInit,
    ViewChild
} from '@angular/core';
import { Observable } from 'rxjs';
import { SkillService } from '../skill.service';
// import {chart, default as Highcharts} from 'highcharts';

@Component({
    selector: 'skill-list',
    templateUrl: './skill-list.component.html',
    styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit {
    // @ViewChild('skillChart') skillChart: ElementRef;
    // chart: Highcharts.ChartObject;

    skills: Observable<any[]>;
    skillsHidden: Boolean = true;

    // chartOptions = {
    //     responsive: true
    // };

    // chartData = [
    //     { data: [330, 600, 260, 700], label: 'Account A' },
    //     { data: [120, 455, 100, 340], label: 'Account B' },
    //     { data: [45, 67, 800, 500], label: 'Account C' }
    // ];
    //
    // chartLabels = ['January', 'February', 'Mars', 'April'];

    constructor(private skillService: SkillService) {}

    ngOnInit() {
        this.skills = this.skillService.getData();
    }

    // ngAfterViewInit() {
    //     setTimeout(() => {
    //         this.chart = chart(this.skillChart.nativeElement, this.options);
    //         this.chart.addSeries({
    //             name: 'Balram',
    //             data: [2, 3, 7],
    //         });
    //     }, 1000);
    // }

    onChartClick(event) {
        console.log(event);
    }
}
