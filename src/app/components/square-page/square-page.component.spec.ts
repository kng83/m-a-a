import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquarePageComponent } from './square-page.component';

describe('SquarePageComponent', () => {
  let component: SquarePageComponent;
  let fixture: ComponentFixture<SquarePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquarePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquarePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
