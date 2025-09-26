import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentBody } from './component-body';

describe('ComponentBody', () => {
  let component: ComponentBody;
  let fixture: ComponentFixture<ComponentBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentBody]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentBody);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
