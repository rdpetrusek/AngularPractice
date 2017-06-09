import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MainAppComponent } from './main-app.component'
import { Sprint } from './events/sprint.component'
import { UserStory } from './events/user-story.component'

@NgModule({
	imports: [BrowserModule],
	declarations: [
		MainAppComponent, 
		UserStory,
		Sprint
	],
	bootstrap: [MainAppComponent] //top-level component, so we declare this module as our bootstrap module
})

export class AppModule {}