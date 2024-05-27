import {
	Component,
	Input,
} from "@angular/core"

export interface Card {
	text: string;
	image: string;
	imageLarge: boolean;
	url: string;
}

@Component({
	selector: `app-card`,
	standalone: true,
	templateUrl: `./card.component.html`,
	styleUrl: `./card.component.scss`,
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
