import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomNewComponent } from './room-new/room-new.component';


const routes: Routes = [
  {path:'', component: RoomListComponent},
  {path:'new', component: RoomNewComponent},
  {path:':room_id', component: RoomDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
