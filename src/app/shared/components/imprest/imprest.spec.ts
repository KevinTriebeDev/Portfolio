import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imprest } from './imprest';

describe('Imprest', () => {
  let component: Imprest;
  let fixture: ComponentFixture<Imprest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Imprest],
    }).compileComponents();

    fixture = TestBed.createComponent(Imprest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
