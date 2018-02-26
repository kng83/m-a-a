import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperButtonComponent } from './super-button.component';

describe('SuperButtonComponent', () => {
  let component: SuperButtonComponent;
  let fixture: ComponentFixture<SuperButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
