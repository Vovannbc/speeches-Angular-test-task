import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MySpeechesPageComponent } from './my-speeches-page/my-speeches-page.component';
import { NewSpeechPageComponent } from './new-speech-page/new-speech-page.component';
import { AllSpeechesPageComponent } from './all-speeches-page/all-speeches-page.component';
import { SpeechService } from './speech.service';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import { SpeechPageComponent } from './speech-page/speech-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
	declarations: [
		AppComponent,
		MySpeechesPageComponent,
		NewSpeechPageComponent,
		AllSpeechesPageComponent,
		SpeechPageComponent,
		NotFoundComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AppRoutingModule
	],
	providers: [SpeechService],
	bootstrap: [AppComponent]
})
export class AppModule { }
