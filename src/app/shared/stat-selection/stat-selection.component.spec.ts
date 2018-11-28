import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatSelectionComponent } from './stat-selection.component';

describe('StatSelectionComponent', () => {
  let component: StatSelectionComponent;
  let fixture: ComponentFixture<StatSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
