import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetailsKpComponent } from './orders-details-kp.component';

describe('OrdersDetailsKpComponent', () => {
  let component: OrdersDetailsKpComponent;
  let fixture: ComponentFixture<OrdersDetailsKpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersDetailsKpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetailsKpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
