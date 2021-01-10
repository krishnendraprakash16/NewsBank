import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsListingPage } from './news-listing.page';

describe('NewsListingPage', () => {
  let component: NewsListingPage;
  let fixture: ComponentFixture<NewsListingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsListingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
