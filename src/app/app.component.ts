import {Component} from "@angular/core"
import {CommonModule} from "@angular/common"
// import {RouterOutlet} from "@angular/router"
import {TitleComponent} from "./title/title.component"
import {TimelineComponent} from "./timeline/timeline.component"
import {PictureComponent} from "./picture/picture.component"
import {ContactTableComponent} from "./contact-table/contact-table.component"
import {SkillsComponent} from "./skills/skills.component"
import {ProjectsComponent} from "./projects/projects.component"
import {ExperiencesComponent} from "./experiences/experiences.component"
import {LanguagesComponent} from "./languages/languages.component"
import {EducationComponent} from "./education/education.component"

@Component({
	selector: `app-root`,
	standalone: true,
	imports: [
		CommonModule,
		// RouterOutlet,
		TitleComponent,
		TimelineComponent,
		PictureComponent,
		ContactTableComponent,
		SkillsComponent,
		ProjectsComponent,
		ExperiencesComponent,
		LanguagesComponent,
		EducationComponent,
	],
	templateUrl: `./app.component.html`,
	styleUrls: [`./app.component.scss`],
})
export class AppComponent {
	public flag = false

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
