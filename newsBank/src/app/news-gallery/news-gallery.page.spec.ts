import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsGalleryPage } from './news-gallery.page';

describe('NewsGalleryPage', () => {
  let component: NewsGalleryPage;
  let fixture: ComponentFixture<NewsGalleryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsGalleryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsGalleryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
