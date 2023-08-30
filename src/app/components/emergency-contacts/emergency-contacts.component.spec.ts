import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyContactsComponent } from './emergency-contacts.component';

describe('EmergencyContactsComponent', () => {
  let component: EmergencyContactsComponent;
  let fixture: ComponentFixture<EmergencyContactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmergencyContactsComponent]
    });
    fixture = TestBed.createComponent(EmergencyContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
