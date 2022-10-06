import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hide]'
})
export class HideDirective implements OnInit {

  constructor(private elem: ElementRef, private renderer: Renderer2) { }
  
  ngOnInit(): void {
    this.renderer.setStyle(this.elem.nativeElement, 'font-size', '24px');
  }

  @HostListener('mouseenter') onmouseover(event: Event){
    this.renderer.setStyle(this.elem.nativeElement, 'visibility', 'hidden') // Oculta
  }

  @HostListener('mouseleave') onmouseleave(event: Event){
    this.renderer.setStyle(this.elem.nativeElement, 'visibility', 'visible') // Hace visible
  }
  
}
