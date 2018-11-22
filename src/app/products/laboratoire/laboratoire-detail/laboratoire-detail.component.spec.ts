import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoireDetailComponent } from './laboratoire-detail.component';

describe('LaboratoireDetailComponent', () => {
  let component: LaboratoireDetailComponent;
  let fixture: ComponentFixture<LaboratoireDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboratoireDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratoireDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
