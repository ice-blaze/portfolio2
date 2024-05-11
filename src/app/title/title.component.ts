import {Component} from "@angular/core"
import {CommonModule} from "@angular/common"
import {PictureComponent} from "./picture/picture.component"

@Component({
	selector: `app-title`,
	standalone: true,
	imports: [
		CommonModule,
		PictureComponent,
	],
	templateUrl: `./title.component.html`,
	styleUrl: `./title.component.scss`,
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class TitleComponent {}
