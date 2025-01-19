import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PemateriComponent } from './pemateri.component';

describe('PemateriComponent', () => {
  let component: PemateriComponent;
  let fixture: ComponentFixture<PemateriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PemateriComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PemateriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
