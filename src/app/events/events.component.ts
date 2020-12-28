import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { IEvent } from '../interface/Event'

@Component({
	selector: 'app-events',
	templateUrl: './events.component.html',
	styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

	events: IEvent[] = []
	constructor(private _eventService: EventService) { }

	ngOnInit(): void {
		this.getEvents()
	}

	getEvents() {
		this._eventService.getEvents()
			.subscribe(
				res => this.events = res,
				err => console.error(err)
			)
	}

}
