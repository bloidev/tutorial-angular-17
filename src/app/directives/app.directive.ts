import { Directive, ElementRef, Renderer2 } from "@angular/core"

@Directive({
    selector: '[resaltar]'
})
export class ResaltarDirective {
    constructor(private el: ElementRef, private renderer: Renderer2){
        this.renderer.setStyle(this.el.nativeElement, 'background-color', 'red');
    }
}