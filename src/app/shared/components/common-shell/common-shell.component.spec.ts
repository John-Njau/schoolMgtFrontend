import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonShellComponent } from './common-shell.component';

describe('CommonShellComponent', () => {
  let component: CommonShellComponent;
  let fixture: ComponentFixture<CommonShellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonShellComponent]
    });
    fixture = TestBed.createComponent(CommonShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
