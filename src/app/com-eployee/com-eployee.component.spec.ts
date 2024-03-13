import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComEployeeComponent } from './com-eployee.component';

describe('ComEployeeComponent', () => {
  let component: ComEployeeComponent;
  let fixture: ComponentFixture<ComEployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComEployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComEployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
