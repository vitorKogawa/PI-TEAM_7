import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedGameComponent } from './featured-game.component';

describe('FeaturedGameComponent', () => {
  let component: FeaturedGameComponent;
  let fixture: ComponentFixture<FeaturedGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
