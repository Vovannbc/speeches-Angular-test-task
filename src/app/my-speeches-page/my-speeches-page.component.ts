import {Component, OnInit} from '@angular/core';
import {SpeechService} from '../speech.service';

@Component({
	selector: 'app-my-speeches-page',
	templateUrl: './my-speeches-page.component.html',
	styleUrls: ['./my-speeches-page.component.css']
})
export class MySpeechesPageComponent implements OnInit {

	speeches = [];

	constructor(private speechService: SpeechService) {
	}

	ngOnInit() {
		this.speechService.getSpeeches().subscribe(s => this.speeches = s);
	}

}
