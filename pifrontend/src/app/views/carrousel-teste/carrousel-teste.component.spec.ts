import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselTesteComponent } from './carrousel-teste.component';

describe('CarrouselTesteComponent', () => {
  let component: CarrouselTesteComponent;
  let fixture: ComponentFixture<CarrouselTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrouselTesteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrouselTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
