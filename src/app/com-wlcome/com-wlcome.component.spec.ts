import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComWlcomeComponent } from './com-wlcome.component';

describe('ComWlcomeComponent', () => {
  let component: ComWlcomeComponent;
  let fixture: ComponentFixture<ComWlcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComWlcomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComWlcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
