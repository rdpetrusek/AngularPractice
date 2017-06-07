import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { EventsAppComponent } from './events-app.component'

@NgModule({
	imports: [BrowserModule],
	declarations: [EventsAppComponent],
	bootstrap: [EventsAppComponent] //top-level component, so we declare this module as our bootstrap module
})

export class AppModule {}