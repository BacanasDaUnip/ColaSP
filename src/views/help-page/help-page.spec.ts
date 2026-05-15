import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { HelpPage } from './help-page';

describe('HelpPage', () => {
  let component: HelpPage;
  let fixture: ComponentFixture<HelpPage>;
  let routerSpy: { navigate: jest.Mock };

  beforeEach(async () => {
    routerSpy = { navigate: jest.fn() };

    await TestBed.configureTestingModule({
      imports: [HelpPage],
      providers: [{ provide: Router, useValue: routerSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(HelpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('btnBack should navigate to /welcome when called directly', () => {
    component.btnBack();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/welcome']);
  });

  it('clicking the template button should call btnBack and navigate to /welcome', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('button');
    expect(button).toBeTruthy();

    routerSpy.navigate.mockClear();
    button!.click();
    fixture.detectChanges();

    expect(routerSpy.navigate).toHaveBeenCalledWith(['/welcome']);
  });

  it('template button displays "Selecionar rota"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button')?.textContent).toContain('Selecionar rota');
  });
});
