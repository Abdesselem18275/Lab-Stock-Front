import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSearchbarComponent } from './stock-searchbar.component';

describe('StockSearchbarComponent', () => {
  let component: StockSearchbarComponent;
  let fixture: ComponentFixture<StockSearchbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockSearchbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
