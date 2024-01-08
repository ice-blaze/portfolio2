import {Component} from "@angular/core"
import {CommonModule} from "@angular/common"
import {RouterOutlet} from "@angular/router"
import {TitleComponent} from "./title/title.component"
import {TimelineComponent} from "./timeline/timeline.component"
import {FooterComponent} from "./footer/footer.component"

@Component({
	selector: `app-root`,
	standalone: true,
	imports: [
		CommonModule,
		RouterOutlet,
		TitleComponent,
		TimelineComponent,
		FooterComponent,
	],
	templateUrl: `./app.component.html`,
	styleUrls: [`./app.component.scss`],
})
export class AppComponent {
	public flag = false

	public ngOnInit(): void {
		setTimeout(
			() => {
				console.log(`hello`)

				this.flag = true
			},
			5000,
		)
	}

	public hello1(): void {
		console.log()
	}

	public hello2(

		a: string,

		b: string, // not double line

	): boolean {
		console.log(
			`hello`,
			a,
			b,
		)

		console.log(
			`hello`,
			a,
			b,
		)

		return true
	}
}
