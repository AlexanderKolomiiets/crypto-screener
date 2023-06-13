import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CointDetailsComponent } from './coint-details.component';

describe('CointDetailsComponent', () => {
  let component: CointDetailsComponent;
  let fixture: ComponentFixture<CointDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CointDetailsComponent]
    });
    fixture = TestBed.createComponent(CointDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
