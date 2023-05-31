import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appRed]',
})
export class RedDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.style.color = 'red';
  }
}
