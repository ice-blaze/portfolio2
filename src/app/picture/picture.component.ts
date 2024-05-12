import {NgOptimizedImage} from '@angular/common'
import {Component} from '@angular/core'

@Component({
	selector: `app-picture`,
	standalone: true,
	imports: [NgOptimizedImage],
	templateUrl: `./picture.component.html`,
	styleUrl: `./picture.component.scss`,
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class PictureComponent { }
