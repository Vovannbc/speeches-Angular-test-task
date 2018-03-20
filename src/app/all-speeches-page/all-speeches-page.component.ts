import {Component, Input, OnInit} from '@angular/core';
import {SpeechService} from '../speech.service';
import {SpeechModel} from '../speech.model';

@Component({
	selector: 'app-all-speeches-page',
	templateUrl: './all-speeches-page.component.html',
	styleUrls: ['./all-speeches-page.component.css']
})
export class AllSpeechesPageComponent implements OnInit {
	@Input('speeches') speeches: SpeechModel[];
	// speeches: SpeechModel[] = [];

	constructor(private speechService: SpeechService) {
	}

	ngOnInit() {
		this.speeches = this.speechService.speeches;
	}

	// receiveSubmited() {
	// 	this.speeches = this.speechService.speeches;
	// }
}
