import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaCollectionComponent } from './manga-collection.component';

describe('MangaCollectionComponent', () => {
  let component: MangaCollectionComponent;
  let fixture: ComponentFixture<MangaCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangaCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangaCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
