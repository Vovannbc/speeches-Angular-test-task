import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SpeechModel} from '../speech.model';

@Component({
	selector: 'app-new-speech-page',
	templateUrl: './new-speech-page.component.html',
	styleUrls: ['./new-speech-page.component.css']
})
export class NewSpeechPageComponent implements OnInit {

	form: FormGroup;
	speeches: SpeechModel[];

	constructor() {}

	ngOnInit() {

		this.form = new FormGroup({
			speechContent: new FormControl('', Validators.required),
			speechAuthor: new FormControl(''),
			speechDate: new FormControl()
		});
	}

	onSubmit() {
		console.log('submited', this.form);
		this.speeches.push({
			id: this.speeches.length + 1,
			content: this.form.controls.speechContent.value,
			keywords: ['one word', 'two word'],
			author: this.form.controls.speechAuthor.value,
			date: ''
		});
	}
}
