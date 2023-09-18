import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainaboutComponent } from './mainabout.component';

describe('MainaboutComponent', () => {
  let component: MainaboutComponent;
  let fixture: ComponentFixture<MainaboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainaboutComponent]
    });
    fixture = TestBed.createComponent(MainaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
