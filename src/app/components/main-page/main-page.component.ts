import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PicoPlaca } from '../../models/pico-placa';
import { PicoPlacaAdmin } from '../../controller/pico-placa-admin';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  picoPlaca!: PicoPlaca;
  adm: PicoPlacaAdmin = new PicoPlacaAdmin();
  isPicoPlaca: boolean = false;

  //Form Group
  picoPlacaFormGroup = new FormGroup({
    plateNumber: new FormControl('', [Validators.required]),
    currentDate: new FormControl(null, [Validators.required]),
    time: new FormControl('', [Validators.required]),
  });

  predict() {
    let flag: boolean = false;
    if (this.picoPlacaFormGroup.status == 'VALID') {
      this.picoPlaca = new PicoPlaca(this.picoPlacaFormGroup.get('plateNumber')?.value!,
        this.picoPlacaFormGroup.get('currentDate')?.value!,
        this.picoPlacaFormGroup.get('time')?.value!);

      this.isPicoPlaca = this.adm.validatePicoPlaca(this.picoPlaca);
    }
  }
}
