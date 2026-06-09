import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastWorkPage } from './last-work-page';

describe('LastWorkPage', () => {
  let component: LastWorkPage;
  let fixture: ComponentFixture<LastWorkPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastWorkPage],
    }).compileComponents();

    fixture = TestBed.createComponent(LastWorkPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
