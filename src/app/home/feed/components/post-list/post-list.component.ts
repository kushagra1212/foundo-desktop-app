import {
  Component,
  Input,
  EventEmitter,
  Output,
  OnInit,
  ViewChild,
} from '@angular/core';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { Post } from 'src/models';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  @Input() posts: Array<Post>;
  @ViewChild(InfiniteScrollDirective) infiniteScrollDirective: any;
  @Output() onScroll: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}
  ngOnInit(): void {}
  onScrollEmit() {
    this.onScroll.emit();
  }
  ngOnDestroy() {
    this.infiniteScrollDirective.disposeScroller.unsubscribe();
    this.infiniteScrollDirective.setup();
  }
}
