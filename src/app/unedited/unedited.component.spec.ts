import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UneditedComponent } from './unedited.component';

describe('UneditedComponent', () => {
  let component: UneditedComponent;
  let fixture: ComponentFixture<UneditedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UneditedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UneditedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
