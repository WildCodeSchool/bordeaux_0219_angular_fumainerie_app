import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrainingComponent } from './draining.component';

describe('DrainingComponent', () => {
  let component: DrainingComponent;
  let fixture: ComponentFixture<DrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
