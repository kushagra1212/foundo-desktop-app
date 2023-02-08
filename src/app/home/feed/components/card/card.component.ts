import { Component, Input } from '@angular/core';
import { Post } from 'src/models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() post: Post;
  constructor() {
    console.log(this.post);
  }
}
