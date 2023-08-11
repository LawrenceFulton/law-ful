import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DolphinDogComponent } from './dolphin-dog.component';

describe('DophineDogComponent', () => {
  let component: DolphinDogComponent;
  let fixture: ComponentFixture<DolphinDogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DolphinDogComponent]
    });
    fixture = TestBed.createComponent(DolphinDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
