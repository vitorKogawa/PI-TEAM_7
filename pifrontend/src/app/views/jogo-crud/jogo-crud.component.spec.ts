import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoCrudComponent } from './jogo-crud.component';

describe('JogoCrudComponent', () => {
  let component: JogoCrudComponent;
  let fixture: ComponentFixture<JogoCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogoCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JogoCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
