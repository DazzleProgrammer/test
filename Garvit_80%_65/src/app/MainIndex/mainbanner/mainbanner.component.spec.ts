import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainbannerComponent } from './mainbanner.component';

describe('MainbannerComponent', () => {
  let component: MainbannerComponent;
  let fixture: ComponentFixture<MainbannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainbannerComponent]
    });
    fixture = TestBed.createComponent(MainbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
