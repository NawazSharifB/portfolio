import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppCommonSharedModule } from './../app-common-shared/app-common-shared.module';
import { AboutComponent } from './components/about/about.component';
import { DisplayCopyButtonDirective } from './directives/display-copy-button.directive';
import { SkillChartComponent } from './components/skill-chart/skill-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
    declarations: [
        AboutComponent,
        DisplayCopyButtonDirective,
        SkillChartComponent
    ],
    imports: [
        AppCommonSharedModule,
        NgxChartsModule,
        RouterModule.forChild([
            {path: '', component: AboutComponent}
        ])
    ]
})

export class AppAboutModule {}
