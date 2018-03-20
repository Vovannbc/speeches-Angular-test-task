import {Injectable} from '@angular/core';
import {SpeechModel} from './speech.model';

@Injectable()
export class SpeechService {

	constructor() { }

	speeches: SpeechModel[] = [];

	saveToStorage(): void {
		localStorage.setItem('speeches', JSON.stringify(this.speeches));
	}

	getFromStorage(): SpeechModel[] {
		return JSON.parse(localStorage.getItem('speeches'));
	}

	getSpeeches(): SpeechModel[] {
		return this.speeches = this.getFromStorage();
	}

	getSpeach(id: number) {
		return this.getFromStorage().filter(obj => obj.id == id)[0];
	}

	deleteSpeech(id: number) {
		this.speeches.splice(id - 1 , 1);
		this.saveToStorage();
		return this.getSpeeches;
	}

	addSpeech(speech: SpeechModel) {
		this.speeches.push(speech);
		this.saveToStorage();
		return this.getSpeeches;
	}

	updateSpeech(speech: SpeechModel) {
		const i = this.speeches.indexOf(this.speeches.find(s => speech.id === s.id));
		this.speeches.splice(i, 1, speech);
		this.saveToStorage();
		return this.getSpeeches;
	}
}
