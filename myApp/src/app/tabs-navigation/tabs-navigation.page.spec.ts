import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsNavigationPage } from './tabs-navigation.page';

describe('TabsNavigationPage', () => {
  let component: TabsNavigationPage;
  let fixture: ComponentFixture<TabsNavigationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsNavigationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
