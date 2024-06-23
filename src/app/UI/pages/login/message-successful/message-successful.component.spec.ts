import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageSuccessfulComponent } from './message-successful.component';

describe('MessageSuccessfulComponent', () => {
  let component: MessageSuccessfulComponent;
  let fixture: ComponentFixture<MessageSuccessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageSuccessfulComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
