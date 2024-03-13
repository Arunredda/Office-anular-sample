import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComcreateStudentComponent } from './comcreate-student.component';

describe('ComcreateStudentComponent', () => {
  let component: ComcreateStudentComponent;
  let fixture: ComponentFixture<ComcreateStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComcreateStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComcreateStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
