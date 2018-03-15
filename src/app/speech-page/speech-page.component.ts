import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {SpeechService} from '../speech.service';
import {SpeechModel} from '../speech.model';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
	selector: 'app-speech-page',
	templateUrl: './speech-page.component.html',
	styleUrls: ['./speech-page.component.css']
})
export class SpeechPageComponent implements OnInit {

	id: number;
	speech: SpeechModel;
	speechContent: string;

	speechForm: FormGroup;

	constructor(private route: ActivatedRoute,
							private speechService: SpeechService) {}

	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			this.id = +params['id'];
			this.speech = this.speechService.getSpeach(this.id);
			this.speechContent = this.speech.content;

			this.speechForm = new FormGroup({
				author: new FormControl(this.speech.author),
				keywords: new FormControl(),
				date: new FormControl()
			});
		});
	}

	deleteSpeech(id) {
		console.log(`speech ${id} deleted!`);
		alert(`speech ${id} deleted!`);
	}

	updateSpeech() {
		console.log('speech updated!');
		alert('speech updated!');
	}

	shareSpeech() {
		console.log('speech shared!');
	}
}

