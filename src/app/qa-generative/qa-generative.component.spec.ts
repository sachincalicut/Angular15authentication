import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaGenerativeComponent } from './qa-generative.component';

describe('QaGenerativeComponent', () => {
  let component: QaGenerativeComponent;
  let fixture: ComponentFixture<QaGenerativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ QaGenerativeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QaGenerativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
