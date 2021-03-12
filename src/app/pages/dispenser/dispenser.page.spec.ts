import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DispenserPage } from './dispenser.page';

describe('DispenserPage', () => {
  let component: DispenserPage;
  let fixture: ComponentFixture<DispenserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispenserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DispenserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
