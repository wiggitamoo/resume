import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
    selector: 'skill-chart',
    templateUrl: './skill-chart.component.html',
    styleUrls: ['./skill-chart.component.scss']
})
export class SkillChartComponent implements OnInit {
    Highcharts: typeof Highcharts = Highcharts; // required

    chartOptions = {
        chart: {
            type: 'bar',
            margin: [15, 15, 35, 15],
            plotBorderWidth: 1,
            plotBorderColor: '#999'
        },
        credits: { enabled: false },
        exporting: { enabled: false },
        legend: { enabled: false },
        title: { text: 'test' },
        xAxis: {
            tickLength: 0,
            lineWidth: 0,
            labels: '',
            max: 1
        },
        yAxis: {
            min: 0,
            tickColor: '#888',
            tickWidth: 2,
            tickLength: 6,
            tickInterval: 10,
            minorTickInterval: 5,
            minorTickWidth: 2,
            minorTickLength: 4,
            minorGridLineWidth: 0,
            tickPosition: 'outside',
            gridLineWidth: 0,
            endOnTick: true,
            title: { text: '' },
            max: 100,
            labels: { y: 20, style: { fontSize: '11px' } },
            plotBands: [
                { from: 0, to: 33, color: 'red' },
                { from: 33, to: 70, color: 'yellow' },
                { from: 70, to: 100, color: 'green' }
            ]
        },
        tooltip: {
            enabled: true,
            backgroundColor: 'rgba(255, 255, 255, .85)',
            borderWidth: 0,
            shadow: true,
            style: { fontSize: '10px', padding: 2 },
            formatter: function() {
                return (
                    this.series.name +
                    ': <strong>' +
                    Highcharts.numberFormat(this.y, 2) +
                    '</strong>'
                );
            }
        },
        plotOptions: {
            series: {
                animation: false
            },
            bar: {},
            scatter: {
                marker: {
                    symbol:
                        'url(http://www.veryicon.com/icon/32/System/Crystal%20Clear%20Actions/Left%20Arrow.png)'
                }
            }
        },
        series: [{ name: 'Target', type: 'scatter', data: [0] }]
    };

    @Input() value: any;
    @Input() title: any;

    constructor() {}

    ngOnInit() {
        this.chartOptions.series[0].data[0] = this.value;
        this.chartOptions.title = this.title.toString();
    }
}
