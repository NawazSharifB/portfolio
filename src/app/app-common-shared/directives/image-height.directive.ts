import { Directive, ElementRef, AfterViewInit, Input, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appSetImageHeight]'
})

export class ImageHeightDirective implements AfterViewInit{
    @Input('appSetImageHeight') height: number;
    defaultHeight = 1.05;
    constructor(
        private el: ElementRef,
        private renderer: Renderer2
    ) {}

    ngAfterViewInit(): void {
        const width = this.el.nativeElement.offsetWidth;
        const setheight = (width * (this.height || this.defaultHeight)) + 'px';
        // const setheight = (width * this.height) + 'px';
        this.renderer.setStyle(this.el.nativeElement, 'height', setheight);
    }
}
