import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpointernoComponent } from './cuerpointerno.component';

describe('CuerpointernoComponent', () => {
  let component: CuerpointernoComponent;
  let fixture: ComponentFixture<CuerpointernoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpointernoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerpointernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
