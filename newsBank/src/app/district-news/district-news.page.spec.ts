import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DistrictNewsPage } from './district-news.page';

describe('DistrictNewsPage', () => {
  let component: DistrictNewsPage;
  let fixture: ComponentFixture<DistrictNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictNewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DistrictNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
