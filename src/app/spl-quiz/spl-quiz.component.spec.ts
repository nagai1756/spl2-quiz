import { DataService } from 'src/app/data.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SplQuizComponent } from './spl-quiz.component';

describe('SplQuizComponent', () => {
  let component: SplQuizComponent;
  let fixture: ComponentFixture<SplQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplQuizComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
