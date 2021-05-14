import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUsuariosComponent } from './all-usuarios.component';

describe('AllUsuariosComponent', () => {
  let component: AllUsuariosComponent;
  let fixture: ComponentFixture<AllUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
