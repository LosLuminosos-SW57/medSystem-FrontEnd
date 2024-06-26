import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSampleComponent } from './new-sample.component';

describe('NewSampleComponent', () => {
  let component: NewSampleComponent;
  let fixture: ComponentFixture<NewSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewSampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
