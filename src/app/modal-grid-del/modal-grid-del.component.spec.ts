import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGridDelComponent } from './modal-grid-del.component';

describe('ModalGridDelComponent', () => {
  let component: ModalGridDelComponent;
  let fixture: ComponentFixture<ModalGridDelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalGridDelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalGridDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
