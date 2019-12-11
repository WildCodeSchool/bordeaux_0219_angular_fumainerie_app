import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommuniactionComponent } from './communiaction.component';

describe('CommuniactionComponent', () => {
  let component: CommuniactionComponent;
  let fixture: ComponentFixture<CommuniactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommuniactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommuniactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
