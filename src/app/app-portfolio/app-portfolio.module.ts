import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppCommonSharedModule } from './../app-common-shared/app-common-shared.module';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

@NgModule({
    declarations: [
        PortfolioComponent
    ],
    imports: [
        AppCommonSharedModule,
        RouterModule.forChild([
            {path: '', component: PortfolioComponent}
        ])
    ],
    exports: []
})

export class AppPortfolioModule {}
