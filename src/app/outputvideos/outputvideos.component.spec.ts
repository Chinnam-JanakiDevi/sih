import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputvideosComponent } from './outputvideos.component';

describe('OutputvideosComponent', () => {
  let component: OutputvideosComponent;
  let fixture: ComponentFixture<OutputvideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputvideosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputvideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
