import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUneditedComponent } from './create-unedited.component';

describe('CreateUneditedComponent', () => {
  let component: CreateUneditedComponent;
  let fixture: ComponentFixture<CreateUneditedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUneditedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUneditedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
