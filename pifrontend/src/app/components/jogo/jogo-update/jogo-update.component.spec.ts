import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoUpdateComponent } from './jogo-update.component';

describe('JogoUpdateComponent', () => {
  let component: JogoUpdateComponent;
  let fixture: ComponentFixture<JogoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogoUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JogoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
