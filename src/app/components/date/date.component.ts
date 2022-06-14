import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'date',
  templateUrl: './date.component.html'
})
export class DateComponent {
  @Input() formGroup!: FormGroup;
}
