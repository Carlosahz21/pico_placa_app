import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseNumberComponent } from './license-number.component';

describe('LicenseNumberComponent', () => {
  let component: LicenseNumberComponent;
  let fixture: ComponentFixture<LicenseNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
