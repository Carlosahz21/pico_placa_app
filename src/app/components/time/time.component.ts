import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'time',
  templateUrl: './time.component.html'
})
export class TimeComponent {
  @Input() formGroup!: FormGroup;
}
