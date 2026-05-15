import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Welcome } from './welcome';

describe('Welcome', () => {
  let component: Welcome;
  let fixture: ComponentFixture<Welcome>;
  let routerSpy: { navigate: jest.Mock };

  beforeEach(async () => {
    routerSpy = { navigate: jest.fn() };

    await TestBed.configureTestingModule({
      imports: [Welcome],
      providers: [{ provide: Router, useValue: routerSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(Welcome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle showOptions', () => {
    expect(component.showOptions).toBe(false);
    component.toggle();
    expect(component.showOptions).toBe(true);
    component.toggle();
    expect(component.showOptions).toBe(false);
  });

  it('btnHelp should navigate to /help-page', () => {
    component.btnHelp();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/help-page']);
  });

  it('select should navigate for mapped option and hide options', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    component.showOptions = true;

    component.select('Sé');

    expect(logSpy).toHaveBeenCalledWith('Destino selecionado:', 'Sé');
    expect(component.showOptions).toBe(false);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/se']);

    logSpy.mockRestore();
  });

  it('select should not navigate for unmapped option but still hide options', () => {
    routerSpy.navigate.mockClear();
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    component.showOptions = true;

    component.select('Penha');

    expect(logSpy).toHaveBeenCalledWith('Destino selecionado:', 'Penha');
    expect(component.showOptions).toBe(false);
    expect(routerSpy.navigate).not.toHaveBeenCalled();

    logSpy.mockRestore();
  });
});
