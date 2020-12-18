import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelerComponent } from './seler.component';

describe('SelerComponent', () => {
  let component: SelerComponent;
  let fixture: ComponentFixture<SelerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
