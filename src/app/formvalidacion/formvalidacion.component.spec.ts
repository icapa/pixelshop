import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormvalidacionComponent } from './formvalidacion.component';

describe('FormvalidacionComponent', () => {
  let component: FormvalidacionComponent;
  let fixture: ComponentFixture<FormvalidacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormvalidacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormvalidacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
