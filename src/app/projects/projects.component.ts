import {Component} from "@angular/core"
import {
	Card,
	CardComponent,
} from "./card/card.component"

@Component({
	selector: `app-projects`,
	standalone: true,
	imports: [CardComponent],
	templateUrl: `./projects.component.html`,
	styleUrl: `./projects.component.scss`,
})
export class ProjectsComponent {
	public projects: Card[] = [
		{
			image: ``,
			url: `#1`,
			text: `hello`,
		},
		{
			image: ``,
			url: `#2`,
			text: `hello2`,
		},
	]
}
