import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookmarkedNewsPage } from './bookmarked-news.page';

describe('BookmarkedNewsPage', () => {
  let component: BookmarkedNewsPage;
  let fixture: ComponentFixture<BookmarkedNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkedNewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookmarkedNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
