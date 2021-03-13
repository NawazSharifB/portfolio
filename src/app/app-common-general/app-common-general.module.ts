import { NgModule } from '@angular/core';

import { AppCommonSharedModule } from './../app-common-shared/app-common-shared.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ResizeNavbarDirective } from './directives/resize-navbar.directive';
import { ServerErrorComponent } from './components/server-error/server-error.component';
import { FooterComponent } from './components/footer/footer.component';


const DECLARATIONS = [
    NotFoundComponent,
    NavbarComponent,
    ResizeNavbarDirective,
    ServerErrorComponent,
    FooterComponent
];

@NgModule({
    declarations: [DECLARATIONS],
    imports: [
        AppCommonSharedModule
    ],
    exports: [DECLARATIONS]
})

export class AppCommonGeneralModule {}
