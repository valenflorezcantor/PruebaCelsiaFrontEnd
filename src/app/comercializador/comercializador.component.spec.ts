import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComercializadorComponent } from './comercializador.component';

describe('ComercializadorComponent', () => {
  let component: ComercializadorComponent;
  let fixture: ComponentFixture<ComercializadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComercializadorComponent]
    });
    fixture = TestBed.createComponent(ComercializadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
