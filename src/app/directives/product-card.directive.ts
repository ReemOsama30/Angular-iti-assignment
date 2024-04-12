import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appProductCard]',
  standalone: true
})
export class ProductCardDirective implements OnChanges{

  @Input('appProductCard') defaultColor: string = 'wheat';
  @Input() hoverColor: string = 'yellow';

  constructor(private element: ElementRef) {
   
  }
  ngOnChanges(): void {
    this.setBackgroundColor(this.defaultColor);
  }

  private setBackgroundColor(color: string) {
    this.element.nativeElement.style.borderRadius = '5px';
    this.element.nativeElement.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.1)';
    this.element.nativeElement.style.backgroundColor = color;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBackgroundColor(this.hoverColor);
    this.element.nativeElement.style.boxShadow = '0px 8px 16px rgba(0, 0, 0, 0.2)';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBackgroundColor(this.defaultColor);
    this.element.nativeElement.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.1)';
  }

}




