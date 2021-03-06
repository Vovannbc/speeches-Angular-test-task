import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SpeechModel} from '../speech.model';
import {SpeechService} from '../speech.service';

@Component({
	selector: 'app-new-speech-page',
	templateUrl: './new-speech-page.component.html',
	styleUrls: ['./new-speech-page.component.css']
})
export class NewSpeechPageComponent implements OnInit {

	form: FormGroup;
	speeches: SpeechModel[] = [];
	// @Output() submited = new EventEmitter();

	constructor(private speechService: SpeechService) {}

	ngOnInit() {
		this.speeches = this.speechService.getSpeeches();

		this.form = new FormGroup({
			speechContent: new FormControl('', Validators.required),
			speechAuthor: new FormControl(''),
			speechDate: new FormControl()
		});
	}

	onSubmit() {
		console.log('submited', this.form);
		this.speechService.addSpeech({
			id: this.speeches.length + 1,
			content: this.form.controls.speechContent.value,
			keywords: ['one word', 'two word'],
			author: this.form.controls.speechAuthor.value,
			date: ''
		});
		this.speeches = this.speechService.getSpeeches();
	}
}
