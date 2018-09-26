import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appMyHighlight]'
})
export class MyHighlightDirective {

  private _defaultColor = 'red';

  constructor(private el: ElementRef) { }

  @Input('myHighlight') highlightColor: string;
  @Input('size') size: number;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this._defaultColor);
    // console.log(tooltip);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
