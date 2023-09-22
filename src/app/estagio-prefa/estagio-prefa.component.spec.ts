import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstagioPrefaComponent } from './estagio-prefa.component';

describe('EstagioPrefaComponent', () => {
  let component: EstagioPrefaComponent;
  let fixture: ComponentFixture<EstagioPrefaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EstagioPrefaComponent]
    });
    fixture = TestBed.createComponent(EstagioPrefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
