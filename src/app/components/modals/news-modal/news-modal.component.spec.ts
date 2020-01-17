import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsModalComponent } from './news-modal.component';
import { from } from 'rxjs';

describe('NewsModalComponent', () => {
  let component: NewsModalComponent;
  let fixture: ComponentFixture<NewsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});