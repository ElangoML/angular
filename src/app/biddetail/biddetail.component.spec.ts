import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddetailComponent } from './biddetail.component';

describe('BiddetailComponent', () => {
  let component: BiddetailComponent;
  let fixture: ComponentFixture<BiddetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiddetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiddetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
