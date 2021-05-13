import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoDeleteComponent } from './jogo-delete.component';

describe('JogoDeleteComponent', () => {
  let component: JogoDeleteComponent;
  let fixture: ComponentFixture<JogoDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogoDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JogoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
