import {
	ChangeDetectionStrategy,
	Component,
} from "@angular/core"
import {CommonModule} from "@angular/common"

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CommonModule],
	selector: `app-timeline`,
	standalone: true,
	styleUrl: `./timeline.component.scss`,
	templateUrl: `./timeline.component.html`,
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class TimelineComponent {}
