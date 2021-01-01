import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGrComponent } from './data-gr.component';

describe('DataGrComponent', () => {
  let component: DataGrComponent;
  let fixture: ComponentFixture<DataGrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataGrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataGrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
