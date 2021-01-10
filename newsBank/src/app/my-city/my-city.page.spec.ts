import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyCityPage } from './my-city.page';

describe('MyCityPage', () => {
  let component: MyCityPage;
  let fixture: ComponentFixture<MyCityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyCityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
