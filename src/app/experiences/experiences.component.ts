import {ChangeDetectionStrategy, Component} from '@angular/core'

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	selector: `app-experiences`,
	standalone: true,
	styleUrl: `./experiences.component.scss`,
	templateUrl: `./experiences.component.html`,
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class ExperiencesComponent { }
