import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulComponent } from './modul.component';

describe('ModulComponent', () => {
  let component: ModulComponent;
  let fixture: ComponentFixture<ModulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModulComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
