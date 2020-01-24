import { async, TestBed } from '@angular/core/testing';
import { RessourcesDocumentsComponent } from './ressources-documents.component';
describe('RessourcesDocumentsComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RessourcesDocumentsComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(RessourcesDocumentsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ressources-documents.component.spec.js.map