import {Directive, ElementRef, Input, inject} from '@angular/core';

@Directive({
	selector: `[appBackgroundImage]`,
	standalone: true,
})
export class BackgroundImageDirective {
	private readonly elementRef = inject(ElementRef)

	@Input()
	public set appBackgroundImage (value: string) {
		(this.elementRef.nativeElement as HTMLElement).style.backgroundImage = `url('${value}')`;
	}
}
