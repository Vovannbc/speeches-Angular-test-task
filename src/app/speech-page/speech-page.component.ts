import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {SpeechService} from '../speech.service';

@Component({
	selector: 'app-speech-page',
	templateUrl: './speech-page.component.html',
	styleUrls: ['./speech-page.component.css']
})
export class SpeechPageComponent implements OnInit {

	id: any;

	constructor(private route: ActivatedRoute) {
	}

	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			this.id = +params['id'];
		});
	}


}
