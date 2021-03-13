import { NgModule } from '@angular/core';


import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ClipboardModule} from '@angular/cdk/clipboard';

const MODULES = [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatIconModule,
    MatSnackBarModule,
    MatDividerModule,
    MatToolbarModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    DragDropModule,
    ClipboardModule
];

@NgModule({
    declarations: [],
    imports: [MODULES],
    exports: [MODULES]
})

export class MaterialModule {}
