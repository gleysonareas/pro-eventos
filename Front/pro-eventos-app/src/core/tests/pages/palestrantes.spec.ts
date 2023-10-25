import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Palestrantes } from '../../../app/pages/palestrantes/palestrantes';

describe('PalestrantesComponent', () => {
  let component: Palestrantes;
  let fixture: ComponentFixture<Palestrantes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Palestrantes ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Palestrantes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
