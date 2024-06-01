import {ChangeDetectionStrategy, Component} from "@angular/core"
import {CommonModule} from "@angular/common"
import {ContactTableComponent} from "./contact-table/contact-table.component"
import {EducationComponent} from "./education/education.component"
import {ExperiencesComponent} from "./experiences/experiences.component"
import {LanguagesComponent} from "./languages/languages.component"
import {PictureComponent} from "./picture/picture.component"
import {ProjectsComponent} from "./projects/projects.component"
import {SkillsComponent} from "./skills/skills.component"
import {TimelineComponent} from "./timeline/timeline.component"
import {TitleComponent} from "./title/title.component"

const toto = (
	aaa: string,
	bbb: string,
): string => {
	// eslint-disable-next-line no-console
	console.log(
		`toto`,
		aaa,
		bbb,
	)
	const tutu = `${aaa}slkdfj`
	return `${tutu}sldkjf`
}

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [
		CommonModule,
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
	selector: `app-root`,
	standalone: true,
	styleUrl: `./app.component.scss`,
	templateUrl: `./app.component.html`,
})
export class AppComponent {
	// Stylistic playground
	public flag = false

	public hello1 (): void {
		// eslint-disable-next-line no-console
		console.log(this.flag)
	}

	public hello2 (
		aaa: string,
		bbb: string,
	): boolean {
		// eslint-disable-next-line no-console
		console.log(
			`hello`,
			aaa,
			bbb,
			toto(
				`sldkjf`,
				`osdif`,
			),
		)

		// eslint-disable-next-line no-console
		console.log(`hello`)

		return this.flag
	}
}
