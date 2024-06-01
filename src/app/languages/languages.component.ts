import {ChangeDetectionStrategy, Component} from '@angular/core'

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [],
	selector: `app-languages`,
	standalone: true,
	styleUrl: `./languages.component.scss`,
	templateUrl: `./languages.component.html`,
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class LanguagesComponent { }
