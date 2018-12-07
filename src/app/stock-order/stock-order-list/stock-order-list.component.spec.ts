import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockOrderListComponent } from './stock-order-list.component';

describe('StockOrderListComponent', () => {
  let component: StockOrderListComponent;
  let fixture: ComponentFixture<StockOrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockOrderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
