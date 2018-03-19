import {Component, Input, OnInit} from '@angular/core';
import {SpeechService} from './speech.service';
import {SpeechModel} from './speech.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	speeches: SpeechModel[] = [];
	constructor(private speechService: SpeechService) {
	}

	ngOnInit() {
		this.speeches = this.speechService.speeches;
	}

}
