import { Injectable } from '@angular/core';

@Injectable()
export class SpeechService {

	constructor() { }

	speeches = [
		{
			id: 1,
			content: 'Speech content 1',
			author: 'Someone1',
			data: ''
		},
		{
			id: 2,
			content: 'Speech content 2',
			author: 'Someone2',
			data: ''
		},
		{
			id: 3,
			content: 'Speech content 3',
			author: 'Someone3',
			data: ''
		}
	];

}
