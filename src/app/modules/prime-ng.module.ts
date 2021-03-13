import { NgModule } from '@angular/core';
import {GalleriaModule} from 'primeng/galleria';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import {DividerModule} from 'primeng/divider';
import {MenuModule} from 'primeng/menu';

const MODULES = [
    GalleriaModule,
    ButtonModule,
    TooltipModule,
    DividerModule,
    MenuModule,
];

@NgModule({
    declarations: [],
    imports: [MODULES],
    exports: [MODULES]
})

export class PrimeNgModule {}
