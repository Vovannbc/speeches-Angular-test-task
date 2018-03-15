import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSpeechPageComponent } from './new-speech-page.component';

describe('NewSpeechPageComponent', () => {
  let component: NewSpeechPageComponent;
  let fixture: ComponentFixture<NewSpeechPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSpeechPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSpeechPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
