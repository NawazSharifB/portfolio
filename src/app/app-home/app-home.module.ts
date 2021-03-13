import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomepageComponent } from './components/homepage/homepage.component';
import { AppCommonSharedModule } from '../app-common-shared/app-common-shared.module';

@NgModule({
    declarations: [
        HomepageComponent
    ],
    imports: [
        AppCommonSharedModule,
        RouterModule.forChild([
            {path: '', component: HomepageComponent}
        ]),
    ]
})

export class AppHomeModule {}
