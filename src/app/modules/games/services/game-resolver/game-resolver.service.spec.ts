import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { GameResolverService } from './game-resolver.service';

describe('GameResolverService', () => {
  let service: GameResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
    });
    service = TestBed.inject(GameResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
