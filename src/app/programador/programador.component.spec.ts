import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramadorComponent } from './programador.component';

describe('ProgramadorComponent', () => {
  let component: ProgramadorComponent;
  let fixture: ComponentFixture<ProgramadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProgramadorComponent]
    });
    fixture = TestBed.createComponent(ProgramadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
