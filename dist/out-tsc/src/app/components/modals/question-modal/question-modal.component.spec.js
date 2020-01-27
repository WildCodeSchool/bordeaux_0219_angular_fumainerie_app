import { async, TestBed } from '@angular/core/testing';
import { QuestionModalComponent } from './question-modal.component';
describe('QuestionModalComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [QuestionModalComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(QuestionModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=question-modal.component.spec.js.map