import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
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
	speechForm: FormGroup;

	constructor(private route: ActivatedRoute,
							private router: Router,
							private speechService: SpeechService) {}

	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			this.id = +params['id'];
			this.speech = this.speechService.getSpeach(this.id);
			// this.speechService.getSpeach(this.id).subscribe(s => this.speech = s);
			console.dir(this.speech);

			this.speechForm = new FormGroup({
				speechContent: new FormControl(this.speech.content),
				author: new FormControl(this.speech.author),
				keywords: new FormControl(),
				date: new FormControl()
			});
		});
	}

	deleteSpeech(id) {
		console.log(`speech ${id} deleted!`);
		this.router.navigate(['/']);
		this.speechService.deleteSpeech(id);
		alert(`speech ${id} deleted!`);
	}

	updateSpeech(form) {
		const content = form.controls.speechContent.value;
		const author = form.controls.author.value;
		const date = form.controls.date.value;
		console.log(form);
		this.speechService.updateSpeech({
			id: this.speech.id,
			content: content,
			author: author,
			date: date,
			keywords: ['one word', 'two word']
		});
	}

	shareSpeech() {
		console.log('speech shared!');
	}
}

