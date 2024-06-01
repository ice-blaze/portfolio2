import {
	ChangeDetectionStrategy,
	Component,
	Input,
} from "@angular/core"
import {BackgroundImageDirective} from "./background-image.directive"

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [BackgroundImageDirective],
	selector: `app-card`,
	standalone: true,
	styleUrl: `./card.component.scss`,
	templateUrl: `./card.component.html`,
})
export class CardComponent {
	@Input({required: true})
	public text = ``
	@Input({required: true})
	public image = ``
	@Input({required: true})
	public url = ``
	@Input({required: true})
	public large = false
}
