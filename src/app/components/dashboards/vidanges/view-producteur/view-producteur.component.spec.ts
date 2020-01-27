import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProducteurComponent } from './view-producteur.component';

describe('ViewProducteurComponent', () => {
  let component: ViewProducteurComponent;
  let fixture: ComponentFixture<ViewProducteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProducteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProducteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
