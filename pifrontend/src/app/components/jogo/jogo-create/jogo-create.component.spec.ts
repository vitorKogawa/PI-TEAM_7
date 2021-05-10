import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoCreateComponent } from './jogo-create.component';

describe('JogoCreateComponent', () => {
  let component: JogoCreateComponent;
  let fixture: ComponentFixture<JogoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogoCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JogoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
