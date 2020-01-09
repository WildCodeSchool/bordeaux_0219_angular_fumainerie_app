import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualitesFormComponent } from './actualites-form.component';

describe('ActualitesFormComponent', () => {
  let component: ActualitesFormComponent;
  let fixture: ComponentFixture<ActualitesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualitesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualitesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
