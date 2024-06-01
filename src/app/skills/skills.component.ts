import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [],
	selector: `app-skills`,
	standalone: true,
	styleUrl: `./skills.component.scss`,
	templateUrl: `./skills.component.html`,
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class SkillsComponent { }
