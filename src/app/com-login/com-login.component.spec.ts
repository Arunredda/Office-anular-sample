import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComLoginComponent } from './com-login.component';

describe('ComLoginComponent', () => {
  let component: ComLoginComponent;
  let fixture: ComponentFixture<ComLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
