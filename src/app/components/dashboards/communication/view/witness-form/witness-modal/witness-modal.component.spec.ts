import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WitnessModalComponent } from './witness-modal.component';

describe('WitnessModalComponent', () => {
  let component: WitnessModalComponent;
  let fixture: ComponentFixture<WitnessModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WitnessModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WitnessModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
