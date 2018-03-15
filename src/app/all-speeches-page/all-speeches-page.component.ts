import {Component, OnInit} from '@angular/core';
import {SpeechService} from '../speech.service';

@Component({
	selector: 'app-all-speeches-page',
	templateUrl: './all-speeches-page.component.html',
	styleUrls: ['./all-speeches-page.component.css']
})
export class AllSpeechesPageComponent implements OnInit {

	speeches: any;

	constructor(private speechService: SpeechService) {
	}

	ngOnInit() {
		this.speeches = this.speechService.speeches;
	}
}
