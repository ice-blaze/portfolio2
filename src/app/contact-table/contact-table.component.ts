import {
	ChangeDetectionStrategy,
	Component,
} from '@angular/core'

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [],
	selector: `app-contact-table`,
	standalone: true,
	styleUrl: `./contact-table.component.scss`,
	templateUrl: `./contact-table.component.html`,
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class ContactTableComponent { }
