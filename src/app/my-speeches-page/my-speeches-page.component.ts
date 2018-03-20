import {Component, OnInit} from '@angular/core';
import {SpeechService} from '../speech.service';
import {SpeechModel} from '../speech.model';

@Component({
	selector: 'app-my-speeches-page',
	templateUrl: './my-speeches-page.component.html',
	styleUrls: ['./my-speeches-page.component.css']
})
export class MySpeechesPageComponent implements OnInit {

	speeches: SpeechModel[] = [];

	constructor(private speechService: SpeechService) {
	}

	ngOnInit() {
		this.speeches = this.speechService.getSpeeches();
		console.log(this.speeches);
	}

}
