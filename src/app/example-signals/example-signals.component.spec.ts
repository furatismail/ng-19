import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleSignalsComponent } from './example-signals.component';

describe('ExampleSignalsComponent', () => {
  let component: ExampleSignalsComponent;
  let fixture: ComponentFixture<ExampleSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleSignalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
