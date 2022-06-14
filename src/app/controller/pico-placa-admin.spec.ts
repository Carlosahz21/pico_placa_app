import { PicoPlacaAdmin } from './pico-placa-admin';
import { PicoPlaca } from '../models/pico-placa';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Days } from '../models/days';

describe('PicoPlacaAdmin', () => {
  let adm: PicoPlacaAdmin | null;
  let picoPlaca: PicoPlaca;
  let picoPlacaFormGroup: FormGroup;

  beforeEach(() => {
    adm = new PicoPlacaAdmin();
    picoPlaca = new PicoPlaca("PBX-0211", new Date("06-13-2022"), "16:15");
  });

  it('should create an instance', () => {
    expect(new PicoPlacaAdmin()).toBeTruthy();
  });

  it('inRange should return true', () => {
    expect(adm?.inRange(picoPlaca.time)).toEqual(true);
  });

  it('getLastDigits should return [1, 2]', () => {
    expect(adm?.getLastDigits(Days.MONDAY)).toEqual([1, 2]);
  });

  it('validatePicoPlaca should return true', () => {
    expect(adm?.validatePicoPlaca(picoPlaca)).toEqual(true);
  });
});
