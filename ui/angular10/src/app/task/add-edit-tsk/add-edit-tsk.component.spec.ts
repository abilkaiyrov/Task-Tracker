import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTskComponent } from './add-edit-tsk.component';

describe('AddEditTskComponent', () => {
  let component: AddEditTskComponent;
  let fixture: ComponentFixture<AddEditTskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditTskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditTskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
