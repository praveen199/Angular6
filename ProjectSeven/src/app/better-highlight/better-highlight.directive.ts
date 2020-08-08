import { Directive, OnInit, ElementRef,Renderer2, HostListener } from '@angular/core';


@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private elementRef:ElementRef,private renderer : Renderer2) { }

  ngOnInit() {
   // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue')
  }

  @HostListener('mouseenter') mouseover(eventData : Event) {
    this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue');
  }

  @HostListener('mouseleave') mouseleave(eventData : Event) {
    this.renderer.setStyle(this.elementRef.nativeElement,'background-color','transparent')
  }

}
