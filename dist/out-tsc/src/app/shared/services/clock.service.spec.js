import { TestBed } from '@angular/core/testing';
import { ClockService } from './clock.service';
describe('ClockService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(ClockService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=clock.service.spec.js.map