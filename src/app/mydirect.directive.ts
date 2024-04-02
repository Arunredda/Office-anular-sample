import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMydirect]'
})
export class MydirectDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'blue';
  }
}
