import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedRoutingModule } from './feed-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FeedComponent } from './feed.component';
import { SearchHeaderComponent } from './components/search-header/search-header.component';
import { MatIconModule } from '@angular/material/icon';
import { NavComponent } from './components/nav/nav.component';
import { CardComponent } from './components/card/card.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PostListComponent } from './components/post-list/post-list.component';
import { FilterComponentComponent } from './components/filter-component/filter-component.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ExpandCardComponent } from './components/expand-card/expand-card.component';
import { MatPseudoCheckboxModule } from '@angular/material/core';

@NgModule({
  declarations: [
    FeedComponent,
    PostListComponent,
    SearchHeaderComponent,
    NavComponent,
    CardComponent,
    CardComponent,
    FilterComponentComponent,
    ExpandCardComponent,
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    SharedModule,
    MatIconModule,
    InfiniteScrollModule,
    MatDialogModule,
    MatPseudoCheckboxModule,
  ],
  exports: [],

  entryComponents: [FilterComponentComponent], // Need to add this line
})
export class FeedModule {}
