import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilleHomeComponent } from './famille-home.component';

describe('FamilleHomeComponent', () => {
  let component: FamilleHomeComponent;
  let fixture: ComponentFixture<FamilleHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilleHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilleHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
