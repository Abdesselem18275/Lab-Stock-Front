import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockOrderNewComponent } from './stock-order-new.component';

describe('StockOrderNewComponent', () => {
  let component: StockOrderNewComponent;
  let fixture: ComponentFixture<StockOrderNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockOrderNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockOrderNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
