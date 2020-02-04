import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDeleteFileModalComponent } from './upload-delete-file-modal.component';

describe('UploadDeleteFileModalComponent', () => {
  let component: UploadDeleteFileModalComponent;
  let fixture: ComponentFixture<UploadDeleteFileModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadDeleteFileModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadDeleteFileModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
