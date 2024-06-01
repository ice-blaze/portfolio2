import {
	ChangeDetectionStrategy,
	Component,
} from '@angular/core'

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [],
	selector: `app-education`,
	standalone: true,
	styleUrl: `./education.component.scss`,
	templateUrl: `./education.component.html`,
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class EducationComponent { }
