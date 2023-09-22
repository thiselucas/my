import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstagioCraComponent } from './estagio-cra.component';

describe('EstagioCraComponent', () => {
  let component: EstagioCraComponent;
  let fixture: ComponentFixture<EstagioCraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EstagioCraComponent]
    });
    fixture = TestBed.createComponent(EstagioCraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
