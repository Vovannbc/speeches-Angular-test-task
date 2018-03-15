import { Injectable } from '@angular/core';

@Injectable()
export class SpeechService {

	constructor() { }

	speeches = [
		{
			id: 1,
			content: 'Speech content 1',
			keywords: ['one word', 'two word'],
			author: 'Someone1',
			date: ''
		},
		{
			id: 2,
			content: 'Speech content 2',
			keywords: ['two word', 'three word'],
			author: 'Someone2',
			date: ''
		},
		{
			id: 3,
			content: 'Speech content 3',
			keywords: ['three word', 'four word'],
			author: 'Someone3',
			date: ''
		}
	];

	getSpeach(id) {
		return this.speeches[id - 1];
	}

	updateSpeech(speech) {

	}

}
