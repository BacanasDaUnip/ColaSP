import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consolacao } from './consolacao';

describe('Consolacao', () => {
  let component: Consolacao;
  let fixture: ComponentFixture<Consolacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Consolacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Consolacao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
