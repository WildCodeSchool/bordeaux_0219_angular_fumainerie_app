import { async, TestBed } from '@angular/core/testing';
import { EventDeleteModalComponent } from './event-delete-modal.component';
describe('EventDeleteModalComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EventDeleteModalComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(EventDeleteModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=event-delete-modal.component.spec.js.map