import { async, TestBed } from '@angular/core/testing';
import { WitnessDeleteModalComponent } from './witness-delete-modal.component';
describe('WitnessDeleteModalComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WitnessDeleteModalComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(WitnessDeleteModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=witness-delete-modal.component.spec.js.map