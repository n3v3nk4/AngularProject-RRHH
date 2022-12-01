import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionEditComponent } from './pension-edit.component';

describe('PensionEditComponent', () => {
  let component: PensionEditComponent;
  let fixture: ComponentFixture<PensionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PensionEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PensionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
