import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadUploadFileModalComponent } from './upload-upload-file-modal.component';

describe('UploadUploadFileModalComponent', () => {
  let component: UploadUploadFileModalComponent;
  let fixture: ComponentFixture<UploadUploadFileModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadUploadFileModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadUploadFileModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
