import { TestBed } from '@angular/core/testing';
import { NewsService } from './news.service';
describe('NewsService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(NewsService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=news.service.spec.js.map