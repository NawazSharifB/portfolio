import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppCommonSharedModule } from './../app-common-shared/app-common-shared.module';
import { AddEditProjectComponent } from './components/add-edit-project/add-edit-project.component';

@NgModule({
    declarations: [
        AddEditProjectComponent
    ],
    imports: [
        AppCommonSharedModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            // {path: 'add-new-project', component: AddEditProjectComponent}
        ])
    ],
    exports: []
})

export class AppAddEditProjctModule {}
