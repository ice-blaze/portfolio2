import {ChangeDetectionStrategy, Component} from "@angular/core"
import {CommonModule} from "@angular/common"

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CommonModule],
	selector: `app-title`,
	standalone: true,
	styleUrl: `./title.component.scss`,
	templateUrl: `./title.component.html`,
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class TitleComponent {}
