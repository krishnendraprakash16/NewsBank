import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RadioPlayPage } from './radio-play.page';

describe('RadioPlayPage', () => {
  let component: RadioPlayPage;
  let fixture: ComponentFixture<RadioPlayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioPlayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RadioPlayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
