import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeinformationComponent } from './shoeinformation.component';

describe('ShoeinformationComponent', () => {
  let component: ShoeinformationComponent;
  let fixture: ComponentFixture<ShoeinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoeinformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoeinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
