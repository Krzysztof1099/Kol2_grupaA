import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersKpComponent } from './orders-kp.component';

describe('OrdersKpComponent', () => {
  let component: OrdersKpComponent;
  let fixture: ComponentFixture<OrdersKpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersKpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersKpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
