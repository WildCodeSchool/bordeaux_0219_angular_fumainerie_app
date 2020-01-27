import { async, TestBed } from '@angular/core/testing';
import { QuestionDeleteModalComponent } from './question-delete-modal.component';
describe('QuestionDeleteModalComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [QuestionDeleteModalComponent]
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
//# sourceMappingURL=question-delete-modal.component.spec.js.map