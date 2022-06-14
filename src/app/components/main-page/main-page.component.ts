import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PicoPlaca } from '../../models/pico-placa';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  picoPlaca!: PicoPlaca ;
  unamePattern: string = "[A-Z]{3}(-)[0-9]{4}";

  //Form Group
  picoPlacaFormGroup = new FormGroup({
    plateNumber: new FormControl('', [Validators.required]),
    currentDate: new FormControl(null, [Validators.required]),
    time: new FormControl('', [Validators.required]),
  });

  predict() {
    if(this.picoPlacaFormGroup.status == 'VALID') {
      this.picoPlaca = new PicoPlaca(this.picoPlacaFormGroup.get('plateNumber')?.value!,
      this.picoPlacaFormGroup.get('currentDate')?.value!,
      this.picoPlacaFormGroup.get('time')?.value!);
    }

      console.log(this.picoPlaca);
      console.log(this.picoPlacaFormGroup);
  }

  // setDate() {
  //   this.currentDate = this.picoPlaca.get('currentDate')?.value!;
  // }
  // public setTime() {
  //   this.time = this.picoPlaca.get('time')?.value!;
  // }
  // public setPlate() {
  //   this.plate = this.picoPlaca.get('plate')?.value!;
  // }
  // public imprimir() {
  //   console.log(`placa: ${this.plate}`);
  //   console.log(`Fecha: ${this.currentDate}`);
  //   console.log(`tiempo: ${this.time}`);
  // }

}
