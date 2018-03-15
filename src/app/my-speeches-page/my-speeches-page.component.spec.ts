import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySpeechesPageComponent } from './my-speeches-page.component';

describe('MySpeechesPageComponent', () => {
  let component: MySpeechesPageComponent;
  let fixture: ComponentFixture<MySpeechesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySpeechesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySpeechesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
