import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonInformationPage } from './person-information.page';

describe('PersonInformationPage', () => {
  let component: PersonInformationPage;
  let fixture: ComponentFixture<PersonInformationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonInformationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
