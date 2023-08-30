import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformativeBannerComponent } from './informative-banner.component';

describe('InformativeBannerComponent', () => {
  let component: InformativeBannerComponent;
  let fixture: ComponentFixture<InformativeBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformativeBannerComponent]
    });
    fixture = TestBed.createComponent(InformativeBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
