import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDeleteModalComponent } from './news-delete-modal.component';

describe('NewsDeleteModalComponent', () => {
  let component: NewsDeleteModalComponent;
  let fixture: ComponentFixture<NewsDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
