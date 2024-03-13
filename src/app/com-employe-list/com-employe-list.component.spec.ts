import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComEmployeListComponent } from './com-employe-list.component';

describe('ComEmployeListComponent', () => {
  let component: ComEmployeListComponent;
  let fixture: ComponentFixture<ComEmployeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComEmployeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComEmployeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
