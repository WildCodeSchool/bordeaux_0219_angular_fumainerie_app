import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionDeleteModalComponent } from './question-delete-modal.component';

describe('QuestionDeleteModalComponent', () => {
  let component: QuestionDeleteModalComponent;
  let fixture: ComponentFixture<QuestionDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
