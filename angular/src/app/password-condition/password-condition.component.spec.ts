import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordConditionComponent } from './password-condition.component';

describe('PasswordConditionComponent', () => {
  let component: PasswordConditionComponent;
  let fixture: ComponentFixture<PasswordConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordConditionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
