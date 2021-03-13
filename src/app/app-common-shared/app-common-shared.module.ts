import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { ImageHeightDirective } from './directives/image-height.directive';
import { MaterialModule } from '../modules/material.module';
import { PrimeNgModule } from '../modules/prime-ng.module';
import { TextShortenPipe } from './pipes/text-shorten.pipe';

@NgModule({
    declarations: [
        ImageHeightDirective,
        TextShortenPipe
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        MaterialModule,
        PrimeNgModule,
    ],
    exports: [
        CommonModule,
        FlexLayoutModule,
        MaterialModule,
        PrimeNgModule,
        ImageHeightDirective,
        TextShortenPipe,
    ]
})

export class AppCommonSharedModule {}
