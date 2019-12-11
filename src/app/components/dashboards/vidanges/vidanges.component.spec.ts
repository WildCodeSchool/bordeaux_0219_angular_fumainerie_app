import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VidangesComponent } from './vidanges.component';

describe('VidangesComponent', () => {
  let component: VidangesComponent;
  let fixture: ComponentFixture<VidangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VidangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VidangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
