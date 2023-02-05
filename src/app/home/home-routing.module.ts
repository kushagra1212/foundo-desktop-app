import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardGuard } from '../shared/authguard.guard';

// The order of the routes in the configuration matters - first-match wins strategy
const routes: Routes = [
  {
    path: '',
    redirectTo: 'feed',
    pathMatch: 'full',
  },
  {
    path: 'feed',
    loadChildren: () => import('./feed/feed.module').then((m) => m.FeedModule),
    canActivate: [AuthguardGuard],
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfileModule),
    canActivate: [AuthguardGuard],
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then((m) => m.ChatModule),
    canActivate: [AuthguardGuard],
  },
  {
    path: 'add-post',
    loadChildren: () =>
      import('./add-post/add-post.module').then((m) => m.AddPostModule),
    canActivate: [AuthguardGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
