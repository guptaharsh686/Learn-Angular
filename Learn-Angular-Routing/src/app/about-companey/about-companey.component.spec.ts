import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCompaneyComponent } from './about-companey.component';

describe('AboutCompaneyComponent', () => {
  let component: AboutCompaneyComponent;
  let fixture: ComponentFixture<AboutCompaneyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutCompaneyComponent]
    });
    fixture = TestBed.createComponent(AboutCompaneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
