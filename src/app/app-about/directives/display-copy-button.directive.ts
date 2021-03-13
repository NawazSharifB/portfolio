import { Directive, Renderer2, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appDisplayCopyButton]'
})
export class DisplayCopyButtonDirective implements OnInit {

  element: HTMLElement;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) { }

  ngOnInit(): void {
    this.element = this.el.nativeElement.querySelector('.copy-that');
  }

  @HostListener('mouseenter') mouseover(): void {
    this.renderer.setStyle(this.element, 'display', 'block');
  }
  @HostListener('mouseleave') mouseleave(): void {
    this.renderer.setStyle(this.element, 'display', 'none');
  }

}
