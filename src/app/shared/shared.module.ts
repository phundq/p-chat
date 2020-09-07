import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialCustomModule } from './material-custom/material-custom.module';
import { LoaderComponent } from './loader/loader.component';
import { ChatItemComponent } from './chat/chat-item/chat-item.component';
import { ChatListComponent } from './chat/chat-list/chat-list.component';
import { MessageItemComponent } from './chat/message-item/message-item.component';
import { ChatMessageComponent } from './chat/chat-message/chat-message.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    ChatItemComponent,
    ChatListComponent,
    MessageItemComponent,
    ChatMessageComponent
  ],
  imports: [
    CommonModule,
    MaterialCustomModule
  ],
  exports: [
    MaterialCustomModule,
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    ChatItemComponent,
    ChatListComponent,
    MessageItemComponent,
    ChatMessageComponent
  ]
})
export class SharedModule { }
