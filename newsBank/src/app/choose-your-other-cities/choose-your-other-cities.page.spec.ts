import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChooseYourOtherCitiesPage } from './choose-your-other-cities.page';

describe('ChooseYourOtherCitiesPage', () => {
  let component: ChooseYourOtherCitiesPage;
  let fixture: ComponentFixture<ChooseYourOtherCitiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseYourOtherCitiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChooseYourOtherCitiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
