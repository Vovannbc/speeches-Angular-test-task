import {Component, OnInit} from '@angular/core';
import {SpeechService} from './speech.service';
import {SpeechModel} from './speech.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	speechesArr: SpeechModel[] = [
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

	speeches: SpeechModel[] = [];

	constructor(private speechService: SpeechService) {
	}

	ngOnInit() {
			if (!localStorage.getItem('speeches')) {
				localStorage.setItem('speeches', JSON.stringify(this.speechesArr));
			}
			this.speeches = this.speechService.getSpeeches();
	}



}
