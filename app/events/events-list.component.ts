import { Component, Input } from '@angular/core'

@Component({
	selector: 'events-list',
	templateUrl: 'app/events/events-list.component.html'
})

export class EventsListComponent{
	allEvents = [{
		id: 1,
		name: 'Some Name',
		date: '1/2/2016',
		time: '12:22 am',
		price: 350,
		imageUrl: '',
		location: {
			address: '1057 DT',
			city: 'London',
			country: 'England'
		}}, {
		id: 2,
		name: 'Some other Name',
		date: '1/2/2016',
		time: '12:22 am',
		price: 3500,
		imageUrl: '',
		location: {
			address: '1057 DT',
			city: 'London',
			country: 'England'
		}}]
}