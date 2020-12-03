import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[verdeDirective]'
})
export class VerdeDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'green';
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
