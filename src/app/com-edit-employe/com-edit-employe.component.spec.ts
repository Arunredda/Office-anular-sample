import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComEditEmployeComponent } from './com-edit-employe.component';

describe('ComEditEmployeComponent', () => {
  let component: ComEditEmployeComponent;
  let fixture: ComponentFixture<ComEditEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComEditEmployeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComEditEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
