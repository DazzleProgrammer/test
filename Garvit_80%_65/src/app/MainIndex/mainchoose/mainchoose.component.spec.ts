import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainchooseComponent } from './mainchoose.component';

describe('MainchooseComponent', () => {
  let component: MainchooseComponent;
  let fixture: ComponentFixture<MainchooseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainchooseComponent]
    });
    fixture = TestBed.createComponent(MainchooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
