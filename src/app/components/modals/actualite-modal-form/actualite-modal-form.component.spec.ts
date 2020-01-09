import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActualiteModalFormComponent } from './actualite-modal-form.component';

describe('ActualitesModalFormComponent', () => {
  let component: ActualiteModalFormComponent;
  let fixture: ComponentFixture<ActualiteModalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualiteModalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualiteModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
