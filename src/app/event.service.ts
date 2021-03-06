import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class EventService {

	private _eventsUrl = '/api/events'
	private _specialEventsUrl = '/api/special'
	constructor(private http: HttpClient) { }

	getEvents() {
		return this.http.get<any>(this._eventsUrl)
	}

	getSpecialEvents() {
		return this.http.get<any>(this._specialEventsUrl)
	}
}
