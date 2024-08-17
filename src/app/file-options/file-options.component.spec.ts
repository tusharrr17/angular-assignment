import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileOptionsComponent } from './file-options.component';

describe('FileOptionsComponent', () => {
  let component: FileOptionsComponent;
  let fixture: ComponentFixture<FileOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
