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
			image: `./assets/projects/angular.svg`,
			imageLarge: false,
			url: `https://github.com/angular/angular/pulls?q=author%3Aice-blaze`,
			text: `
			I contributed to Angular's documentation to unify it and ensure it aligns with Google's JavaScript
			code guidelines.
			`,
		},
		{
			image: `./assets/projects/eslint.svg`,
			imageLarge: false,
			url: `https://github.com/eslint/eslint/pulls?q=author%3Aice-blaze`,
			text: `
			ESLint made a significant change in their philosophy by moving style-related rules to a new library 
			called ESLint Stylistic. The deprecation notice only redirected users to the ESLint Stylistic homepage.
			I updated the documentation to redirect to the specific rule instead.
			`,
		},
		{
			image: `./assets/projects/webnuggets.svg`,
			imageLarge: true,
			url: `https://ice-blaze.github.io/webnuggets/`,
			text: `
			Webnugget is a personal microblogging website where I store links I don't want to forget. It's better to 
			write them down than to repeat past mistakes. The site is built with Angular and hosted on GitHub Pages.
			`,
		},
		{
			image: `./assets/projects/keebord.jpg`,
			imageLarge: true,
			url: `https://github.com/ice-blaze/keebord?tab=readme-ov-file`,
			text: `
			Keebord is a project that analyzes your GitHub repositories and creates a keyboard layout with optimal 
			key positions. It's a toy project built with Vue.js@2 and Express@4.
			`,
		},
		{
			image: `./assets/projects/oblique.jpg`,
			imageLarge: true,
			url: `https://oblique.bit.admin.ch/`,
			text: `
			Oblique is the open-source UI framework of the Swiss Government, built with Angular. It generally 
			overrides Material styles and includes some unique components. I contributed by integrating several 
			components and helped create the library's first web component.
			`,
		},
	]
}
