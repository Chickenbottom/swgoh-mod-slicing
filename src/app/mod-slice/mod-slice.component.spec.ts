import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModSliceComponent } from './mod-slice.component';

describe('ModSliceComponent', () => {
  let component: ModSliceComponent;
  let fixture: ComponentFixture<ModSliceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModSliceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModSliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
