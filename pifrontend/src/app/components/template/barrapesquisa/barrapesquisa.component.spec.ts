import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrapesquisaComponent } from './barrapesquisa.component';

describe('BarrapesquisaComponent', () => {
  let component: BarrapesquisaComponent;
  let fixture: ComponentFixture<BarrapesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarrapesquisaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarrapesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
