import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComidaComponent } from './card-comida.component';

describe('CardComidaComponent', () => {
  let component: CardComidaComponent;
  let fixture: ComponentFixture<CardComidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardComidaComponent]
    });
    fixture = TestBed.createComponent(CardComidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
