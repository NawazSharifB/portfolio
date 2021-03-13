import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PorjectDetailsComponent } from './components/porject-details/porject-details.component';
import { AppCommonSharedModule } from './../app-common-shared/app-common-shared.module';

@NgModule({
    declarations: [
        PorjectDetailsComponent
    ],
    imports: [
        AppCommonSharedModule,
        RouterModule.forChild([
            {path: ':id', component: PorjectDetailsComponent}
        ])
    ],
    exports: []
})

export class AppProjectDetailsModule {}
