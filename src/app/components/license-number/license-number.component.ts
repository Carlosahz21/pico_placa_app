import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'license-number',
  templateUrl: './license-number.component.html'
})
export class LicenseNumberComponent {
  unamePattern: string = "[A-Z]{3}(-)[0-9]{4}";
  @Input() formGroup!: FormGroup;
}
