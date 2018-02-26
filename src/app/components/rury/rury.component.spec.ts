import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuryComponent } from './rury.component';

describe('RuryComponent', () => {
  let component: RuryComponent;
  let fixture: ComponentFixture<RuryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
