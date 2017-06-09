import { Component, Input } from '@angular/core'

@Component({
	selector: 'sprint',
	templateUrl: 'app/events/sprint.component.html'
})

export class Sprint{
	allEvents = [{
		id: 1,
		name: 'Some Name',
		date: '1/2/2016',
		price: 350,
		points: 13
	}, {
		id: 2,
		name: 'Some other Name',
		date: '1/2/2016',
		price: 3500,
		points: 5		
	}];
}