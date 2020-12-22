import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomNewComponent } from './room-new/room-new.component';
import { OntimizeWebModule } from 'ontimize-web-ngx';


@NgModule({
  declarations: [
    RoomDetailComponent,
    RoomListComponent,
    RoomNewComponent],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    OntimizeWebModule
  ]
})
export class RoomsModule { }
