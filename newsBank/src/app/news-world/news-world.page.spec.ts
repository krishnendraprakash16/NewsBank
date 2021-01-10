import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsWorldPage } from './news-world.page';

describe('NewsWorldPage', () => {
  let component: NewsWorldPage;
  let fixture: ComponentFixture<NewsWorldPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsWorldPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsWorldPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
