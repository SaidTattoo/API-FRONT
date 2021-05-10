import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSidemenuComponent } from './app-sidemenu.component';

describe('AppSidemenuComponent', () => {
  let component: AppSidemenuComponent;
  let fixture: ComponentFixture<AppSidemenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSidemenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSidemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
