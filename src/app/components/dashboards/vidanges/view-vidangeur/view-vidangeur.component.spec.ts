import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVidangeurComponent } from './view-vidangeur.component';

describe('ViewVidangeurComponent', () => {
  let component: ViewVidangeurComponent;
  let fixture: ComponentFixture<ViewVidangeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewVidangeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVidangeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
