import { MessageService } from './../../store/service/message.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SettingComponent } from './setting/setting.component';
import { HomeRoutingModule } from './home-routing.module';
import { ChatRoomPageComponent } from './chat-room-page/chat-room-page.component';


@NgModule({
  declarations: [HomeComponent, SettingComponent, ChatRoomPageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  providers:[MessageService]
})
export class HomeModule { }
