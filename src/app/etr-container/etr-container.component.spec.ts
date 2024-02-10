import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ETRContainerComponent } from './etr-container.component';

describe('ETRContainerComponent', () => {
  let component: ETRContainerComponent;
  let fixture: ComponentFixture<ETRContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ETRContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ETRContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
