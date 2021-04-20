import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V11HeroesComponent } from './v11-heroes.component';

describe('V11HeroesComponent', () => {
  let component: V11HeroesComponent;
  let fixture: ComponentFixture<V11HeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V11HeroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V11HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
