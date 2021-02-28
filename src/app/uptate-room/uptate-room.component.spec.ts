import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UptateRoomComponent } from './uptate-room.component';

describe('UptateRoomComponent', () => {
  let component: UptateRoomComponent;
  let fixture: ComponentFixture<UptateRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UptateRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UptateRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
