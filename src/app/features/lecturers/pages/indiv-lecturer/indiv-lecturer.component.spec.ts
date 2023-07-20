import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndivLecturerComponent } from './indiv-lecturer.component';

describe('IndivLecturerComponent', () => {
  let component: IndivLecturerComponent;
  let fixture: ComponentFixture<IndivLecturerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndivLecturerComponent]
    });
    fixture = TestBed.createComponent(IndivLecturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
