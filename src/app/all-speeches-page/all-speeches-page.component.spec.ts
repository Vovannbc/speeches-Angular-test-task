import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSpeechesPageComponent } from './all-speeches-page.component';

describe('AllSpeechesPageComponent', () => {
  let component: AllSpeechesPageComponent;
  let fixture: ComponentFixture<AllSpeechesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSpeechesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSpeechesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
