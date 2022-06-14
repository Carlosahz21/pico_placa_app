import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PicoPlacaAdmin } from 'src/app/controller/pico-placa-admin';
import { PicoPlaca } from 'src/app/models/pico-placa';

import { MainPageComponent } from './main-page.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;
  let spy: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainPageComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    component.picoPlaca = new PicoPlaca("PBX-0211", new Date("06-13-2022"), "16:15");
    component.picoPlacaFormGroup = new FormGroup({
      plateNumber: new FormControl('', [Validators.required]),
      currentDate: new FormControl('', [Validators.required]),
      time: new FormControl('', [Validators.required]),
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MainPageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('Pico y Placa App');
  });
});
