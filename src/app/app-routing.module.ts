import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './shared/authguard.guard';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [{ path: '', redirectTo: 'auth', pathMatch: 'full' }, {
  path: 'auth',
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),

},
{
  path: 'home',
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule), canActivate: [AuthguardGuard],
},
{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
