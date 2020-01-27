import { async, TestBed } from '@angular/core/testing';
import { WitnessFormComponent } from './witness-form.component';
describe('WitnessFormComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WitnessFormComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(WitnessFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=witness-form.component.spec.js.map