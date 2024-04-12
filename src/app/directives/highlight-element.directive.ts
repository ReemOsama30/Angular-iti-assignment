import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlightElement]',
  standalone: true
})
export class HighlightElementDirective implements OnChanges {
@Input ('appHighlightElement')defaultcolor:string="wheat"
 @Input() hoverColor:string='black'
 
 
  constructor(private element:ElementRef) { 





  }
  ngOnChanges(): void {
    this.element.nativeElement.style.backgroundColor=this.defaultcolor;
  }

 @HostListener('mouseover') over()
  {
    this.element.nativeElement.style.backgroundColor=this.hoverColor;
  }
 @HostListener('mouseout') out(){
    this.element.nativeElement.style.backgroundColor=this.defaultcolor;
  }

}
