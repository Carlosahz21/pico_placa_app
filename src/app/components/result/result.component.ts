import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PicoPlaca } from '../../models/pico-placa';

@Component({
  selector: 'result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  @Input() picoPlacaFormGroup!: FormGroup;
  @Input() picoPlaca!: PicoPlaca;
  @Input() isPicoPlaca!: boolean;
}
