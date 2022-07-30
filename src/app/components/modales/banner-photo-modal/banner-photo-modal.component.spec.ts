import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPhotoModalComponent } from './banner-photo-modal.component';

describe('BannerPhotoModalComponent', () => {
  let component: BannerPhotoModalComponent;
  let fixture: ComponentFixture<BannerPhotoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerPhotoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerPhotoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
