import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPostComponent } from './add-post.component';


// The order of the routes in the configuration matters - first-match wins strategy
const routes: Routes = [
  { path: '', component: AddPostComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPostRoutingModule { }
