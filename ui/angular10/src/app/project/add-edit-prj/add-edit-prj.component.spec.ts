import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPrjComponent } from './add-edit-prj.component';

describe('AddEditPrjComponent', () => {
  let component: AddEditPrjComponent;
  let fixture: ComponentFixture<AddEditPrjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditPrjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPrjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
