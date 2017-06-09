import { Component, Input} from '@angular/core'

@Component({
	selector: 'user-story',
	templateUrl: 'app/events/user-story.component.html',
	styles: [`
		.hide { display: none }
		.inline { display: inline-block }
	`]
})

export class UserStory {
	@Input() event: any
	hideDetails = true;

	clicked(){
		this.hideDetails = !this.hideDetails;
	}
}