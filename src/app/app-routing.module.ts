import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MySpeechesPageComponent} from './my-speeches-page/my-speeches-page.component';
import {NewSpeechPageComponent} from './new-speech-page/new-speech-page.component';
import {AllSpeechesPageComponent} from './all-speeches-page/all-speeches-page.component';
import {SpeechPageComponent} from './speech-page/speech-page.component';
import {NotFoundComponent} from './not-found/not-found.component';

const appRoutes: Routes = [
	{path: '', component: MySpeechesPageComponent,
		children: [
			{path: 'speech/:id', component: SpeechPageComponent	}
		]
	},
	{path: 'new', component: NewSpeechPageComponent},
	{path: 'all', component: AllSpeechesPageComponent},
	{path: '**', component: NotFoundComponent}
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(appRoutes)
	],
	declarations: [],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
