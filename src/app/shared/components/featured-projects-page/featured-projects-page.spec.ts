import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedProjectsPage } from './featured-projects-page';

describe('FeaturedProjectsPage', () => {
  let component: FeaturedProjectsPage;
  let fixture: ComponentFixture<FeaturedProjectsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedProjectsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturedProjectsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
