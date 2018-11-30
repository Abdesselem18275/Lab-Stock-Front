import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSearchBoxComponent } from './nav-search-box.component';

describe('NavSearchBoxComponent', () => {
  let component: NavSearchBoxComponent;
  let fixture: ComponentFixture<NavSearchBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavSearchBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
