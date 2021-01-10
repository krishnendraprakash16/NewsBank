import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LiveTvPage } from './live-tv.page';

describe('LiveTvPage', () => {
  let component: LiveTvPage;
  let fixture: ComponentFixture<LiveTvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveTvPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LiveTvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
