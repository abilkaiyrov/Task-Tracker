import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPrjComponent } from './show-prj.component';

describe('ShowPrjComponent', () => {
  let component: ShowPrjComponent;
  let fixture: ComponentFixture<ShowPrjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPrjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPrjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
