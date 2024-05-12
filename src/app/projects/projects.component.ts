import {Component} from '@angular/core'
import {CardComponent} from './card/card.component'

@Component({
	selector: `app-projects`,
	standalone: true,
	imports: [CardComponent],
	templateUrl: `./projects.component.html`,
	styleUrl: `./projects.component.scss`,
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class ProjectsComponent { }