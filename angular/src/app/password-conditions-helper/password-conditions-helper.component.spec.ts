import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordConditionsHelperComponent } from './password-conditions-helper.component';

describe('PasswordConditionsHelperComponent', () => {
  let component: PasswordConditionsHelperComponent;
  let fixture: ComponentFixture<PasswordConditionsHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordConditionsHelperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordConditionsHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
