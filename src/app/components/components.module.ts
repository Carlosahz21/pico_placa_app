import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MainPageComponent } from './main-page/main-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ResultComponent } from './result/result.component';
import { DateComponent } from './date/date.component';
import { TimeComponent } from './time/time.component';
import { LicenseNumberComponent } from './license-number/license-number.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ResultComponent,
    DateComponent,
    TimeComponent,
    LicenseNumberComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  exports: [
    FormsModule,
    MatNativeDateModule,
    MainPageComponent
  ]
})
export class ComponentsModule { }
