import { Component, Input, EventEmitter, Output } from '@angular/core'

@Component({
	selector: 'events-thumbnail',
	templateUrl: 'app/events/events-thumbnail.component.html'
})

export class EventsThumbnail {
	@Input() event: any
	@Output() somethingLoggedEvent = new EventEmitter()

	loggingClickHandler(){
		console.log("We've logged something from \"" + this.event.name + "\"");
	}
}