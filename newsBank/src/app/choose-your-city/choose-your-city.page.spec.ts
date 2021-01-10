import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChooseYourCityPage } from './choose-your-city.page';

describe('ChooseYourCityPage', () => {
  let component: ChooseYourCityPage;
  let fixture: ComponentFixture<ChooseYourCityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseYourCityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChooseYourCityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
