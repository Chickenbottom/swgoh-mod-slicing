import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModCardComponent } from './mod-card.component';

describe('ModCardComponent', () => {
  let component: ModCardComponent;
  let fixture: ComponentFixture<ModCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
