import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoireNewComponent } from './laboratoire-new.component';

describe('LaboratoireNewComponent', () => {
  let component: LaboratoireNewComponent;
  let fixture: ComponentFixture<LaboratoireNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboratoireNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratoireNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
