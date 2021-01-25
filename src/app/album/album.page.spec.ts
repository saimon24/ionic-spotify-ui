import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlbumPage } from './album.page';

describe('AlbumPage', () => {
  let component: AlbumPage;
  let fixture: ComponentFixture<AlbumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlbumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
