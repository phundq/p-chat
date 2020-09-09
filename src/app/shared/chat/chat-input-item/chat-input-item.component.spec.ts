import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatInputItemComponent } from './chat-input-item.component';

describe('ChatInputItemComponent', () => {
  let component: ChatInputItemComponent;
  let fixture: ComponentFixture<ChatInputItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatInputItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatInputItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
