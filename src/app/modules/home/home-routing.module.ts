import { SettingComponent } from './setting/setting.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChatRoomPageComponent } from './chat-room-page/chat-room-page.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {
        path: 'setting',
        component: SettingComponent,
      },
      {
        path: 'chat',
        component: ChatRoomPageComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
