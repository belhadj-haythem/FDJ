import { TestBed } from '@angular/core/testing';

import { FootballService } from './football.service';
import { League } from './models/league.model';
import { first } from 'rxjs/operators';

describe('FootballService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));
  let httpClientSpy: { get: jasmine.Spy };
  let heroService: FootballService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    heroService = new FootballService(<any> httpClientSpy);
  });

  it('should be created', () => {
    const service: FootballService = TestBed.get(FootballService);
    expect(service).toBeTruthy();
  });

  it('#getAllLeagues should return value from observable', (done: DoneFn) => {
    const service: FootballService = TestBed.get(FootballService);
    service.getAllLeagues().subscribe(value => {
      expect(value).toBe('observable value');
      expect(value).toBeDefined();
      expect(value.leagues).toBeDefined();
      expect(value.leagues.length).toBeGreaterThan(0);
      done();
    });
  });
});
