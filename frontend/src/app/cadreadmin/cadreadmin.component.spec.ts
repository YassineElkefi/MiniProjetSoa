import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadreadminComponent } from './cadreadmin.component';

describe('CadreadminComponent', () => {
  let component: CadreadminComponent;
  let fixture: ComponentFixture<CadreadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadreadminComponent]
    });
    fixture = TestBed.createComponent(CadreadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
