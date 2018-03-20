import {Injectable, OnInit} from '@angular/core';
import {SpeechModel} from './speech.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SpeechService {

	constructor() { }

	speeches: SpeechModel[] = [];

	getSpeeches(): Observable<any> {
		return (this.speeches = JSON.parse(localStorage.getItem('speeches'))).asObservable();
	}

	getSpeach(id: number): Observable<any> {
		// console.log(JSON.parse(localStorage.getItem('speeches')));
		return (JSON.parse(localStorage.getItem('speeches')).filter(obj => obj.id == id)[0]).asObservable();
	}

	deleteSpeech(id: number) {
		this.speeches.splice(id - 1 , 1);
		localStorage.setItem('speeches', JSON.stringify(this.speeches));
		return this.getSpeeches;
	}

	addSpeech(speech: SpeechModel) {
		this.speeches.push(speech);
		localStorage.setItem('speeches', JSON.stringify(this.speeches));
		return this.getSpeeches;
	}

	updateSpeech(speech: SpeechModel) {
		console.log(speech);
		// this.speeches.find(s => s.id === speech.id) = speech;
		// console.log(this.speeches.filter(s => s.id == speech.id)[0]);
		// console.log(this.speeches);
		localStorage.setItem('speeches', JSON.stringify(this.speeches));
		return this.getSpeeches;
	}
}
