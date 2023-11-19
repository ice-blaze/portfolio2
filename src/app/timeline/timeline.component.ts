import {Component} from "@angular/core"
import {CommonModule} from "@angular/common"

@Component({
	selector: `app-timeline`,
	standalone: true,
	imports: [CommonModule],
	templateUrl: `./timeline.component.html`,
	styleUrl: `./timeline.component.scss`,
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class TimelineComponent {}
