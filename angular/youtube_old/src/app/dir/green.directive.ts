import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appGreen]',
})

//לייבא יכולת של הוק לפעול במחלקה
export class GreenDirective implements OnInit {
  //כאשר נצור את המשתנה כפרטי, נוכל להשתמש במשתנה שהעברנו לבנאי בכל מקום במחלקה גם בשיטות האחרות
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    //פקודה המורה לאלמנט שעליו מופעל הדיירקטיב להפיכת צבע הרקע לירוק
    this.elementRef.nativeElement.style.background = 'yellowgreen';
  }
}
