import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemKpComponent } from './orders-item-kp.component';

describe('OrdersItemKpComponent', () => {
  let component: OrdersItemKpComponent;
  let fixture: ComponentFixture<OrdersItemKpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersItemKpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersItemKpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
