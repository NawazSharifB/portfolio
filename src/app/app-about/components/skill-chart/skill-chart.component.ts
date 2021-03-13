import { Subscription } from 'rxjs';
import { AfterViewChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-skill-chart',
  templateUrl: './skill-chart.component.html',
  styleUrls: ['./skill-chart.component.scss']
})
export class SkillChartComponent implements OnInit, OnDestroy {

  mediaSub: Subscription;
  skills = [
    {
      name: 'Angular',
      value: 80
    },
    {
      name: 'Typescript',
      value: 90
    },
    {
      name: 'Javacript',
      value: 90
    },
    {
      name: 'Node',
      value: 70
    },
    {
      name: 'Html',
      value: 90
    },
    {
      name: 'Css',
      value: 90
    },
    {
      name: 'Scss',
      value: 80
    },
    {
      name: 'Others',
      value: 30
    },
  ];
  configuration = {
    results: [...this.skills], /* chart data */
    view: [ 600, 300], /*the dimensions of the chart [width, height]. If left undefined, the chart will fit to the parent container size */
    // scheme: ['red', '#2f74f5', '#f2f52f', '#9df835', '#f87335', '#12bff3', '#f312e0', '#0d0bb3'] /* color schema*/,
    scheme: {
      domain: ['red', '#2f74f5', '#f2f52f', '#9df835', '#f87335', '#12bff3', '#f312e0', '#0d0bb3']
    },
    schemeType: 'ordinary' /* ordinary or linear*/,
    customColors: {} /*custom color */,
    animations: true,
    legend: false, /*side notes with color pallet */
    legendTitle: '', /*legend title */
    legendPosition: 'right', /*right or below */
    xAxis: true,
    yAxis: true,
    showGridLines: true,
    roundDomains: true,
    showXAxisLabel: true,
    showYAxisLabel: true,
    xAxisLabel: '', /* x axis label */
    yAxisLabel: '', /* y axis label */
    trimXAxisTicks: true,
    trimYAxisTicks: true,
    rotateXAxisTicks: true,
    maxXAxisTickLength: 16,
    maxYAxisTickLength: 16,
    xAxisTickFormatting: '', // a function
    yAxisTickFormatting: '', // a function
    xAxisTicks: [], /*predefined list of x axis tick values*/
    yAxisTicks: [], /*predefined list of y axis tick values*/
    showDataLabel: true,
    noBarWhenZero: true,
    gradient: true,
    activeEntries: [], /* elements to height */
    barPadding: 8,
    tooltipDisabled: true,
    tooltipTemplate: '' /*a custom ng-template to be displayed inside the tooltip */,
    xScaleMax: 100, /*DIGIT - the maximum value of the x axis (ignored if chart data contains a higher value) */
    xScaleMin: ''/*DIGIT - the minimum value of the x axis (ignored if chart data contains a lower value) */

  };

  constructor(
    private mediaObserver: MediaObserver,
  ) { }

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.asObservable().subscribe( (change: MediaChange[]) => {
      const screen = change[0].mqAlias;
      if (screen === 'xs') {
        this.configuration.view = [280, 300];
      } else if (screen === 'sm') {
        this.configuration.view = [500, 300];
      } else {
        this.configuration.view = [650, 400];
      }
    });
  }

  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }


}
