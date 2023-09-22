import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstagioDigifileComponent } from './estagio-digifile.component';

describe('EstagioDigifileComponent', () => {
  let component: EstagioDigifileComponent;
  let fixture: ComponentFixture<EstagioDigifileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EstagioDigifileComponent]
    });
    fixture = TestBed.createComponent(EstagioDigifileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
