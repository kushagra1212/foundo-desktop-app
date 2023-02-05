import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedRoutingModule } from './feed-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FeedComponent } from './feed.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { SearchHeaderComponent } from './components/search-header/search-header.component';
import { MatIconModule } from '@angular/material/icon';
import { NavComponent } from './components/nav/nav.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    FeedComponent,
    PostListComponent,
    SearchHeaderComponent,
    NavComponent,
    CardComponent,
    CardComponent,
  ],
  imports: [CommonModule, FeedRoutingModule, SharedModule, MatIconModule],
  exports: [],
})
export class FeedModule {}
