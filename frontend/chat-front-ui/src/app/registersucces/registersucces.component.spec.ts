import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistersuccesComponent } from './registersucces.component';

describe('RegistersuccesComponent', () => {
  let component: RegistersuccesComponent;
  let fixture: ComponentFixture<RegistersuccesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistersuccesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistersuccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
