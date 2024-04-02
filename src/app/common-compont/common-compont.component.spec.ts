import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonCompontComponent } from './common-compont.component';

describe('CommonCompontComponent', () => {
  let component: CommonCompontComponent;
  let fixture: ComponentFixture<CommonCompontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonCompontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonCompontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
