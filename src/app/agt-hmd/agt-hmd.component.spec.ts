import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgtHmdComponent } from './agt-hmd.component';

describe('AgtHmdComponent', () => {
  let component: AgtHmdComponent;
  let fixture: ComponentFixture<AgtHmdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AgtHmdComponent]
    });
    fixture = TestBed.createComponent(AgtHmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
