import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding
} from "@angular/core";

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgoundColor: string = 'green';
  @HostBinding('style.color') color: string = 'white';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {  }

  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // console.log(eventData);
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
    this.backgoundColor = 'blue';
    this.color = 'white';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // console.log(eventData);
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black');
    this.backgoundColor = 'transparent';
    this.color = 'black';
  }
}
