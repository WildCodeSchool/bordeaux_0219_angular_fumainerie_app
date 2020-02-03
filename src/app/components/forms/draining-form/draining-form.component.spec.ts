import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DrainingFormComponent } from './draining-form.component';

describe('DrainingComponent', () => {
  let component: DrainingFormComponent;
  let fixture: ComponentFixture<DrainingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrainingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrainingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
