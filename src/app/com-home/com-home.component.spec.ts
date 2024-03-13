import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComHomeComponent } from './com-home.component';

describe('ComHomeComponent', () => {
  let component: ComHomeComponent;
  let fixture: ComponentFixture<ComHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
