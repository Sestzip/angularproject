import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedUploadListComponent } from './shared-upload-list.component';

describe('SharedUploadListComponent', () => {
  let component: SharedUploadListComponent;
  let fixture: ComponentFixture<SharedUploadListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedUploadListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedUploadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
