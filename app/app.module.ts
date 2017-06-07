import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { EventsAppComponent } from './events-app.component'
import { EventsListComponent } from './events/events-list.component'
import { EventsThumbnail } from './events/events-thumbnail.component'

@NgModule({
	imports: [BrowserModule],
	declarations: [
		EventsAppComponent, 
		EventsListComponent,
		EventsThumbnail
	],
	bootstrap: [EventsAppComponent] //top-level component, so we declare this module as our bootstrap module
})

export class AppModule {}