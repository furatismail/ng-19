import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('red')
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  private highlight(color: string) {
    const element = this.elementRef.nativeElement;
    this.renderer.setStyle(element, 'background-color', color)
  } 

}
