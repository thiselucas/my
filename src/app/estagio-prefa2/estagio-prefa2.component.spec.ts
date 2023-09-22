import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstagioPrefa2Component } from './estagio-prefa2.component';

describe('EstagioPrefa2Component', () => {
  let component: EstagioPrefa2Component;
  let fixture: ComponentFixture<EstagioPrefa2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EstagioPrefa2Component]
    });
    fixture = TestBed.createComponent(EstagioPrefa2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
