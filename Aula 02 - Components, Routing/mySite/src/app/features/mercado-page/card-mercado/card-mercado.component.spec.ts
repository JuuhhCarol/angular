import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMercadoComponent } from './card-mercado.component';

describe('CardMercadoComponent', () => {
  let component: CardMercadoComponent;
  let fixture: ComponentFixture<CardMercadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardMercadoComponent]
    });
    fixture = TestBed.createComponent(CardMercadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
