import { TestBed } from '@angular/core/testing';
import { NewsletterService } from './newsletter.service';
describe('NewsletterService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(NewsletterService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=newsletter.service.spec.js.map