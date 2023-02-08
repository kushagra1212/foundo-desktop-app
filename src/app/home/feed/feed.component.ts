import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Post } from 'src/models';
import { PostApiService } from 'src/services/post-api.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  public posts: Array<Post> = [];
  private limit: number = 5;
  private offset: number = 0;
  public isFound: number = 0;
  subscription$: Subscription = new Subscription();

  constructor(
    private postService: PostApiService,
    private toster: ToastrService
  ) {}
  getPosts() {
    console.log('getting post');
    this.subscription$.add(
      this.postService
        .getPosts({
          limit: this.limit,
          offset: this.offset,
          founded: this.isFound,
        })
        .subscribe({
          next: (posts: Array<Post>) => {
            console.log('got post');
            this.posts = [...this.posts, ...posts];
            console.log(this.posts);
          },
          error: (err) => {
            this.handleError(err);
          },
        })
    );
  }
  ngOnInit(): void {
    this.getPosts();
  }
  handleError(err: any) {
    console.log(err);
    this.toster.clear();
    this.toster.info("You've seen it all!");
  }
  onScroll() {
    this.offset += this.limit;

    this.getPosts();
  }
  isFoundChange(isFound: number) {
    this.isFound = isFound;
    this.posts = [];
    this.offset = 0;
    this.getPosts();
  }
  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
}
