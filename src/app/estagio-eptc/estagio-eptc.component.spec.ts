import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstagioEptcComponent } from './estagio-eptc.component';

describe('EstagioEptcComponent', () => {
  let component: EstagioEptcComponent;
  let fixture: ComponentFixture<EstagioEptcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EstagioEptcComponent]
    });
    fixture = TestBed.createComponent(EstagioEptcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
