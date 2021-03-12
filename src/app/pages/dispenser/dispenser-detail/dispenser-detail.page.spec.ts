import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DispenserDetailPage } from "./dispenser-detail.page";

describe('DispenserDetailPage', () => {
  let component: DispenserDetailPage;
  let fixture: ComponentFixture<DispenserDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispenserDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DispenserDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
