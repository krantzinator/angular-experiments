import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFunComponent } from './table-fun.component';

describe('TableFunComponent', () => {
  let component: TableFunComponent;
  let fixture: ComponentFixture<TableFunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableFunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
