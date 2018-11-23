import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilleNewComponent } from './famille-new.component';

describe('FamilleNewComponent', () => {
  let component: FamilleNewComponent;
  let fixture: ComponentFixture<FamilleNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilleNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilleNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
