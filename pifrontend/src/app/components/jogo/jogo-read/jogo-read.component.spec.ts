import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoReadComponent } from './jogo-read.component';

describe('JogoReadComponent', () => {
  let component: JogoReadComponent;
  let fixture: ComponentFixture<JogoReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogoReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JogoReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
