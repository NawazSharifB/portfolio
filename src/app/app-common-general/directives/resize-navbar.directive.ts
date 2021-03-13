import { AfterViewChecked, Directive, ElementRef, Host, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appResizeNavbar]'
})
export class ResizeNavbarDirective {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }



  @HostListener('document:scroll') onscroll(): void {
    if (window.innerHeight < window.pageYOffset) {
      this.renderer.setStyle(this.el.nativeElement, 'height', '50px');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'height', '64px');
    }
  }


}
