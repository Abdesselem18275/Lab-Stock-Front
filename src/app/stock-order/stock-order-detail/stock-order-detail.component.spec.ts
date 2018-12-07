import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockOrderDetailComponent } from './stock-order-detail.component';

describe('StockOrderDetailComponent', () => {
  let component: StockOrderDetailComponent;
  let fixture: ComponentFixture<StockOrderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockOrderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
