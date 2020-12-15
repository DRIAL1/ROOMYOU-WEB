import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountNumberRenderComponent } from './account-number-render.component';

describe('AccountNumberRenderComponent', () => {
  let component: AccountNumberRenderComponent;
  let fixture: ComponentFixture<AccountNumberRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountNumberRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountNumberRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
