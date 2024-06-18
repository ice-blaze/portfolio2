import {
	ChangeDetectionStrategy,
	Component,
} from '@angular/core'
import {NgOptimizedImage} from '@angular/common'
import {PatternComponent} from './pattern.component'

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [
		NgOptimizedImage,
		PatternComponent,
	],
	selector: `app-picture`,
	standalone: true,
	styleUrl: `./picture.component.scss`,
	templateUrl: `./picture.component.html`,
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class PictureComponent { }
