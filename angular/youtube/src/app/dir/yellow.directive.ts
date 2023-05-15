import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appYellow]',
})
export class YellowDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.style.background = 'yellow';
  }
}
