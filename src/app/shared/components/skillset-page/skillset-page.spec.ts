import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsetPage } from './skillset-page';

describe('SkillsetPage', () => {
  let component: SkillsetPage;
  let fixture: ComponentFixture<SkillsetPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsetPage],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsetPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
