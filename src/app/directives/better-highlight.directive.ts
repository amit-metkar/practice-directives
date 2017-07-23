import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding,
  Input
} from "@angular/core";

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input('appBetterHighlight') defaultBackgroundColor: string = 'green';
  @Input() defaultColor: string = 'white';

  @HostBinding('style.backgroundColor') backgoundColor: string;
  @HostBinding('style.color') color: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {  }

  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');

    this.backgoundColor = this.defaultBackgroundColor;
    this.color = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // console.log(eventData);
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
    this.backgoundColor = this.defaultBackgroundColor;
    this.color = this.defaultColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // console.log(eventData);
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black');
    this.backgoundColor = 'transparent';
    this.color = 'black';
  }
}
